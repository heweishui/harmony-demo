export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/benchmark/index',
    'pages/Test/index',
    'pages/demo/index',
    'pages/Test/list/index',
    'pages/Test/image/index',
    'pages/Test/webview/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  animation:{
    delay:5,
    duration:200
  }
})
