import common from '@ohos.app.ability.common';
import { InjectObject } from '@hybrid/web-container/Index';
import { router } from '@kit.ArkUI';

interface NavigateToTaroHybrid {
  indexHtmlPath?: string,
  taroPath?: string
}

interface NavigateToNative {
  url?: string
}

export class TaroHybridNativeMethods {
  private context: common.UIAbilityContext
  constructor(uiAbilityContext: common.UIAbilityContext) {
    this.context = uiAbilityContext
  }

  nativeObj: InjectObject = {
    navigateToNative: (options?: NavigateToNative) => {
      if (options?.url) {
        router.pushUrl({
          url: options?.url//'pages/WebContainerPage',
        }, router.RouterMode.Standard)
      }
    }
  };
}


