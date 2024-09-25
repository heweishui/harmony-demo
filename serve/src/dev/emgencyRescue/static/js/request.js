import apiUrl from "./apiUrl.js"
import utils from "./common.js"

let header = {
	'content-type': 'application/json',
}
exports.Upload = ()=>{
	let send_url =null
	if (apiUrl.constVar.SYS_MODE == 1) {
		send_url = apiUrl.constVar.SYS_TEST_ADDRESS 
	} else if (apiUrl.constVar.SYS_MODE == 2) {
		send_url = apiUrl.constVar.SYS_PRODUCT_ADDRESS 
	}
	return send_url
}
exports.loadData = (type = 'GET', url, data) => {
	let send_url = ""

	if (apiUrl.constVar.SYS_MODE == 1) {
		send_url = apiUrl.constVar.SYS_TEST_ADDRESS + url
	} else if (apiUrl.constVar.SYS_MODE == 2) {
		send_url = apiUrl.constVar.SYS_PRODUCT_ADDRESS + url
	}

	let str = uni.getStorageSync('fs_token') || ''
	let token = ""

	if (utils.renderNullString(str) != "") {
		token = str.token
		header.token = token
	}

	return new Promise((resolve,reject) => {

		uni.request({
			url: send_url, //仅为示例，并非真实接口地址。
			header: header,
			data: data,
			method: type,
			success: function(res) {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err)
				console.log(err)
			}
		})
	})

}
