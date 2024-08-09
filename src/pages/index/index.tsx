import { View, Text,Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
// eslint-disable-next-line import/first
import nativeApi from '@/util/NativeApi'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={()=>nativeApi.navigateToNative({url:'pages/Hello'})}>跳转</Button>
    </View>
  )
}
