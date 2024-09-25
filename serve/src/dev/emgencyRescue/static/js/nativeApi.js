const decorator = window.MethodChannel && window.MethodChannel.jsBridgeMode({ isAsync: false, autoRelease: false }) || (target => target)

class NativeApi{
	//原生和h5通信
	@decorator
	BridgeMessage(options){}
}

const nativeApi = new NativeApi()
export default {
  nativeApi
}