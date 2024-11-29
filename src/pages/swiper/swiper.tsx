import { View, Button, Swiper, SwiperItem } from '@tarojs/components'
import './swiper.scss'
import {useState,useMemo} from 'react'
import Taro from '@tarojs/taro'

export default function Index() {
    const [index,setIndex] = useState(0)
    const props = {}
    const handleChange=(val)=>{
      console.log('onChange current---->',val.detail.current)
      setIndex(val.detail.current)
    }
  const _effectsProps = useMemo(() => {
    if (Taro.env.TARO_ENV === "harmony-hybrid") {
      return {
        onAny: (evenName:string,swiper:any) => {
          if(evenName==="slideChange"){
            handleChange({
              detail: { current: swiper.realIndex },
            });
          }
        },
        ...props, // 保留传入的其他 effectsProps
      };
    }
  }, [props, handleChange]);

  return (
    <View className='index'>
      <Swiper
        indicatorColor='#999'
        indicatorActiveColor='#333'
        current={index}
        effectsProps={_effectsProps}
      >
        <SwiperItem>
          <View className='demo-text-1'></View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'></View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'></View>
        </SwiperItem>
      </Swiper>

      <ScrollView>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          current={index}
          // effectsProps={_effectsProps}
          onChange={(e) => {
            console.log('index-->', e.detail.current)
          }}
        >
          <SwiperItem>
            <View className='demo-text-1'></View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'></View>
          </SwiperItem>
          <SwiperItem>
            <Swiper
              indicatorColor='#999'
              indicatorActiveColor='#333'
              current={index}
              // effectsProps={_effectsProps}
              onChange={(e) => {
                console.log('index-->', e.detail.current)
              }}
            >
              <SwiperItem>
                <View className='demo-text-1'>111</View>
              </SwiperItem>
              <SwiperItem>
                <View className='demo-text-2'>222</View>
              </SwiperItem>
              <SwiperItem>
                <View className='demo-text-3'>333</View>
              </SwiperItem>
            </Swiper>
          </SwiperItem>
        </Swiper>
        <View style={{ height: '120vh' }}>11111</View>
      </ScrollView>
    </View>
  )
}