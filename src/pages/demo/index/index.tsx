import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import nativeApi from '../../../utils/nativeApi'

export default function Index() {
  const handleSayHello = () => {
    nativeApi.sayHello({
      str: 'hhhhhhhhhhh',
      success: (option) => {
        console.log(option)
      }
    })
  }
  return (
    <View className='index'>
      <Button
        className='buttonStyle'
        onClick={() => {
          handleSayHello()
        }}
      >
        sayHello
      </Button>
      <Button
        className='buttonStyle'
        onClick={() => {
          Taro.setStorageSync('message', 'This is new page')
        }}
      >
        Storage2
      </Button>
      <Button
        className='buttonStyle'
        onClick={() => {
          console.log(Taro.getStorageSync('message'))
          // Taro.showModal({
          //   title: 'getStorage2',
          //   content: Taro.getStorageSync('message'),
          //   success: (res) => {
          //     console.log(Taro.getStorageSync('message'))
          //   }
          // })
        }}
      >
        getStorage2
      </Button>
    </View>
  )
}
