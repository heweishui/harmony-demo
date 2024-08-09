// @ts-ignore
const decorator = window.MethodChannel && window.MethodChannel.jsBridgeMode({ isAsync: false, autoRelease: false }) || (target => target)

// @proxyClassSign('')
class NativeApi {
  // @ts-ignore
  @decorator
  navigateToNative(options: any) {}
}

const nativeApi = new NativeApi()
export default nativeApi