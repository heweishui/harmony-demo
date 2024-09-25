import common from '@ohos.app.ability.common';
import { InjectObject } from '@hybrid/web-container/Index';


interface sayHello {
  str: string,
  success: Function
}

interface BridgeOptions {
  _param?: object,
}

export class TaroHybridNativeMethods {
  private context: common.UIAbilityContext

  constructor(uiAbilityContext: common.UIAbilityContext) {
    this.context = uiAbilityContext
  }

  nativeObj: InjectObject = {
    sayHello: (options: sayHello) => {
      console.info('sayHello success:', options.str)
      options.success('success!!!!!!!!!!!!!!!')
    },
  };
}
