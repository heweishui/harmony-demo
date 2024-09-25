import { HostPageState, TaroHybrid ,TaroHybridManager,TaroWebContainer,TaroWebController} from '@hybrid/web-container'
import { SafeArea } from './SafeArea'
import Want from '@ohos.app.ability.Want';
import Url from '@ohos.url';

let storage = LocalStorage.getShared() // 获取共享的本地存储对象

@Entry(storage)
@Component
struct TabsPage {
  @State currentIndex: number = 0
  @State pageState: HostPageState = HostPageState.PageInit;
  @State pageState1: HostPageState = HostPageState.PageInit;
  @State pageState2: HostPageState = HostPageState.PageInit;
  @State indexHtmlPath: string = '/demo/main/index.html';
  private tabsController: TabsController = new TabsController()
  @State taroWebController: TaroWebController = new TaroWebController();
  @LocalStorageProp('want') want: Want = {};

  onPageShow(): void {
    this.tabsController.preloadItems([0,1,2])
  }

  onPageHide(): void {
    this.pageState = HostPageState.PageOnHide
    this.pageState1 = HostPageState.PageOnHide
    this.pageState2 = HostPageState.PageOnHide
  }
  webUrl():string{
    return 'resource://rawfile/demo/main@100000/demo/main/index.html';
    // return 'http://172.29.16.1:8080/#/pages/index/index';
    // return 'http://172.29.16.1:3000/dev/emgencyRescue/?sessionId=f8d962b5-bec8-4ce2-8143-3ce711f021be&source=harmony-hybrid&curEnv=harmony-hybrid&appCode=9011&isNew=false&windowHeight=837&screenHeight=758&headeHeight=41&code=d24b26d9a7ddff0918f95a4b9edbbad5&lat=30.397502&lon=114.37352&isOwner=1#/';
    // return 'https://e-mallh5.dfpv.com.cn/dev/emgencyRescue/?sessionId=f8d962b5-bec8-4ce2-8143-3ce711f021be&source=harmony-hybrid&curEnv=harmony-hybrid&appCode=9011&isNew=false&windowHeight=837&screenHeight=758&headeHeight=41&code=d24b26d9a7ddff0918f95a4b9edbbad5&lat=30.397502&lon=114.37352&isOwner=1#/';
    // return 'http://172.29.16.1:3000';
  }

  onBackPress(): boolean | void {
    const instance = TaroHybridManager.getCoreInstance(this.indexHtmlPath)
    if (!instance) {
      return false;
    }
    return TaroHybridManager.onBack(
      instance.builderData.indexHtmlPath,
      instance.builderData.taroPath)
  }

  webUrlPrefix() {
    try {
      const url = Url.URL.parseURL(this.webUrl());
      return `${url.protocol}//${url.host}/`;
    } catch (err) {
      // logger.error(WEB_CONTAINER_PAGE_TAG, `Invalid webUrl: ${this.webUrl()}`);
      return '';
    }
  }

  @Builder
  TabBuilder(title: string, targetIndex: number, normalImg: Resource, selectedImg: Resource) {
    Column() {
      Image(this.currentIndex == targetIndex ? selectedImg : normalImg)
        .width(28)
        .height(28)
      Text(title)
        .fontSize(14)
        .margin({ top: 4 })
        .fontColor(this.currentIndex == targetIndex ? '#45C461' : '#999999')
    }
    .backgroundColor("#ffffff")
    .width('100%')
    .height(60)
    .justifyContent(FlexAlign.Center)
    .onClick(() => {
      this.currentIndex = targetIndex
    })
  }

  build() {
    Column() {
      Tabs({ barPosition: BarPosition.End, controller: this.tabsController, index: this.currentIndex }) {
        TabContent() {
          Stack({ alignContent: Alignment.TopStart }) {
            TaroWebContainer({
              indexHtmlPath: 'index.html',
              pageState: this.pageState, // 页面状态同步到组件
              webUrl: this.webUrl(), // 初始Url
              webUrlPrefix: this.webUrlPrefix(),
              useCache: false,
              want: this.want, // want信息
              taroWebController: this.taroWebController,
              isFullScreen: false, // 是否全屏显示
              // injectObj: this.nativeObj, // 注入对象
              navigationInitVisible: true, // 导航栏是否显示
              forceDarkAccess: true,
              userAgent: '',
            })
          }
          .height('100%')
          .width('100%')
          .backgroundColor(Color.Transparent)
        }
        .tabBar(this.TabBuilder('首页', 0, $r("app.media.ic_tab_discovery"), $r("app.media.ic_tab_discovery_select")))
        .onWillShow(() => {
          this.indexHtmlPath='index.html'
          this.pageState = HostPageState.PageOnShow
        })
        .onWillHide(() => {
          this.pageState = HostPageState.PageOnHide
        })
        .onAttach(() => {
          this.tabsController.changeIndex(1)
        })
        TabContent() {
          Stack({ alignContent: Alignment.TopStart }) {
            SafeArea() {
              TaroHybrid({
                indexHtmlPath: '/demo/main/index.html',
                taroPath: "/pages/index/index",
                pageState: this.pageState1,
              })
            }
          }
          .height('100%')
          .width('100%')
          .backgroundColor(Color.Transparent)
        }
        .tabBar(this.TabBuilder('发现', 1, $r("app.media.ic_tab_home"), $r("app.media.ic_tab_home_select")))
        .onWillShow(() => {
          this.indexHtmlPath='/demo/main/index.html'
          this.pageState1 = HostPageState.PageOnShow
        })
        .onWillHide(() => {
          this.pageState1 = HostPageState.PageOnHide
        })
        .onAttach(() => {
          this.tabsController.changeIndex(1)
        })
        TabContent() {
          Stack({ alignContent: Alignment.TopStart }) {
            SafeArea() {
              TaroHybrid({
                indexHtmlPath:'/demo/new/index.html',
                taroPath: "/pages/index/index",
                pageState: this.pageState2,
              }).backgroundColor(Color.Yellow)
            }
          }
          .height('100%')
          .width('100%')
          .backgroundColor(Color.Transparent)
        }
        .onWillShow(() => {
          this.indexHtmlPath='/demo/new/index.html'
          this.pageState2 = HostPageState.PageOnShow
        })
        .onWillHide(() => {
          this.pageState2 = HostPageState.PageOnHide
        })
        .tabBar(this.TabBuilder('我的', 2, $r("app.media.ic_tab_mine"), $r("app.media.ic_tab_mine_select")))
      }
      .scrollable(false) //去掉左右滑动的效果
      .barHeight(60)
      .animationDuration(0) //去掉左右滑动的动画
      .onAppear(() => {
        console.log('1111111')
      })
    }
    .backgroundColor("#eeeeee")
    .width('100%')
    .height('100%')
  }
}
