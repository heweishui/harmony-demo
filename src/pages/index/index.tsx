import { View, Button, Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
// import nativeApi from '../../utils/nativeApi'
// import MySwiperComponent from '../swiper/swiper'

export default function Index() {
  const handleSayHello = () => {
    // nativeApi.sayHello({
    //   str: 'hhhhhhhhhhh',
    //   success: (option) => {
    //     console.log(option)
    //   }
    // })
  }
  const handleSwiperChange = (e) => {
    console.log('Current Index:', e.detail.current);
  };
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
      <Button
        className='buttonStyle'
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/swiper/swiper',
          })
        }}
      >
        swiper
      </Button>

      {/* <MySwiperComponent
        effectsProps={{
          // 其他自定义的 Swiper 配置项
          autoplay: true,
          interval: 3000,
          loop: false,
        }}
        onChange={handleSwiperChange}
      /> */}
    </View>
  )
}
