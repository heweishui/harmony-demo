import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';
import { TaroHybridManager } from '@hybrid/web-container';
import router from '@ohos.router';
import { TaroHybridNativeMethods } from '../pages/TaroHybridNativeMethods';
import common from '@ohos.app.ability.common';

const storage = new LocalStorage();

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    storage.setOrCreate('want', want);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
  }

  onDestroy(): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/Index', (err) => {

      TaroHybridManager.init({
        uiAbilityContext: this.context,
        domain: 'http://domain',
        injectNativeMethod: (indexHtmlPath: string, uiAbilityContext: common.UIAbilityContext) => {
          return new TaroHybridNativeMethods(uiAbilityContext).nativeObj
        },
        rootIndexHtmlPath: "/index.html",
        nativeBack: () => {
          router.back()
        },
        forceDarkAccess: true,
        windowClass: windowStage.getMainWindowSync(),
      })

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
