import requestUtils from "./request.js"
const common ={
	//判断非空
	renderNullString(str){
		if(str == '' || str == null || str == 'null' || str == 'undefined' || str==undefined){
			return '';
		}
		return str;
	},
	showToast(
	    title = '',
	    icon = 'none'
	
	) {
	    uni.showToast({
	        title,
	        icon,
			duration:3500
	    });
	},
	throttle(fn, gapTime) {
		if (gapTime == null || gapTime == undefined) {
			gapTime = 1500
		}
	
		let _lastTime = null
	
		// 返回新的函数
		return function() {
			let _nowTime = +new Date()
			if (_nowTime - _lastTime > gapTime || !_lastTime) {
				fn.apply(this, arguments) //将this和参数传给原函数
				_lastTime = _nowTime
			}
		}
	},
	//足迹
	checkTourist(position){
		let userId = uni.getStorageSync('fs_token').userId
		let param={
			userId:userId,
			position: position,
		}
		requestUtils.loadData("POST","mp/footprint/addPoint",param).then(res=>{
			console.log(res)
		})
	}
}


export default common