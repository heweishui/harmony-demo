import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import nativeApi from '../../utils/nativeApi'

export default function Index() {
const handleSayHello=()=>{
nativeApi.sayHello({
  str:'hhhhhhhhhhh',
  success:(option)=>{
    console.log(option)
  }
})
}
  return (
    <View className='index'>
      <Button
        className='buttonStyle'
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/benchmark/index',
          })
        }}
      >
        benchmark
      </Button>
      <Button
        className='buttonStyle'
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/Test/index',
          })
        }}
      >
        Test
      </Button>
      <Button
        className='buttonStyle'
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/demo/index',
          })
        }}
      >
        demo
      </Button>
     
    </View>
  )
}
