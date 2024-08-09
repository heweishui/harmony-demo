import { HostPageState, InjectObject, TaroWebContainer, TaroWebController } from '@hybrid/web-container';
import hilog from '@ohos.hilog';
import Url from '@ohos.url';
import Want from '@ohos.app.ability.Want';

const WEB_CONTAINER_PAGE_TAG = 'WebContainerPage';
let storage = LocalStorage.getShared() // 获取共享的本地存储对象

@Entry(storage)
@Component
struct Index {
  @State message: string = 'Hello World';
  @State pageState: HostPageState = HostPageState.PageInit;
  @State taroWebController: TaroWebController = new TaroWebController()
  @LocalStorageProp('want') want: Want = {};

  onBackPress() {
    if (this.taroWebController.accessBackward()) {
      this.taroWebController.backward();
      return true;
    }
    return false;
  }

  onPageShow() {
    this.pageState = HostPageState.PageOnShow;
  }

  onPageHide() {
    this.pageState = HostPageState.PageOnHide;
  }

  webUrl(): string {
    // 开发阶段可以把网站静态资源文件放置到src/main/resources/rawfile/目录下
    // 生产环境下把网站静态资源放置到web服务器, 这里填写实际的网站地址url
    return 'resource://rawfile/index.html';
  }

  webUrlPrefix() {
    try {
      const url = Url.URL.parseURL(this.webUrl());
      return `${url.protocol}//${url.host}/`;
    } catch (err) {
      hilog.error(0x0001, WEB_CONTAINER_PAGE_TAG, `Invalid webUrl: ${this.webUrl()}`);
      return '';
    }
  }

  build() {
    Column() {
      TaroWebContainer({
        indexHtmlPath: 'index.html',
        pageState: this.pageState, // 页面状态同步到组件
        webUrl: this.webUrl(), // 初始Url
        webUrlPrefix: this.webUrlPrefix(),
        taroWebController: this.taroWebController,
        want: this.want, // want信息
        useCache: false,
        isFullScreen: false, // 是否全屏显示
        // injectObj: this.nativeObj, // 注入对象
        navigationInitVisible: true, // 导航栏是否显示
        forceDarkAccess: true,
      })
        .height('100%')
        .width('100%')
    }
  }
}