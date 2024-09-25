import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Index() {
  return (
    <View className='index'>
      <Button
        className='buttonStyle'
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/Test/list/index',
          })
        }}
      >
        长列表
      </Button>
      <Button
        className='buttonStyle'
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/Test/image/index',
          })
        }}
      >
        image
      </Button>
      <Button
        className='buttonStyle'
        onClick={()=>{
            Taro.navigateTo({
              url: '/pages/Test/webview/index'
            })
        }}
      >
       webview
      </Button>
    </View>
  )
}
