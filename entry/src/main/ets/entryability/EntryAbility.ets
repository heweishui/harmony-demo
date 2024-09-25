import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';
import { TaroHybridManager,GlobalThis, LocalUpdateManagerInstance } from '@hybrid/web-container'
import router from '@ohos.router';
import common from '@ohos.app.ability.common';
import { TaroHybridNativeMethods } from '../pages/TaroHybridNativeMethods';

const storage = new LocalStorage();

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    TaroHybridManager.setCustomUserAgent('WUBA (Phone; OpenHarmony)')
    storage.setOrCreate('want', want);
    GlobalThis.getInstance().setRawFile('demo')
    LocalUpdateManagerInstance.updateMiniOnLaunch(this.context)
  }

  onDestroy(): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    let windowClass: window.Window = windowStage.getMainWindowSync(); // 获取应用主窗口

    windowStage.loadContent('pages/Index', (err) => {
      // 全局初始化
      TaroHybridManager.init({
        uiAbilityContext: this.context,
        // domain: 'http://172.29.16.1:3000', // 小程序的域名，注意：此处不添加/结尾
        domain: 'http://domain', // 小程序的域名，注意：此处不添加/结尾
        injectNativeMethod: (indexHtmlPath: string,uiAbilityContext: common.UIAbilityContext) => { // 扩展原生API
          return new TaroHybridNativeMethods(uiAbilityContext).nativeObj
        },
        rootIndexHtmlPath: "/demo/main/index.html",
        nativeBack: () => {
          router.back()
        },
        forceDarkAccess: true,
        windowClass,
      })
      // 预加载，可选，不是必须
      TaroHybridManager.preLoader(
        windowStage.getMainWindowSync().getUIContext(),
        "/demo/main/index.html", // html的path路由
        "/pages/index/index" // Taro小程序的Page路径
      )

      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');
    });
  }

  onWindowStageDestroy(): void {
    // Main window is destroyed, release UI related resources
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
  }

  onForeground(): void {
    // Ability has brought to foreground
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
  }

  onBackground(): void {
    // Ability has back to background
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
  }
}
