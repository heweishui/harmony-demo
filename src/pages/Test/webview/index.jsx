import React from 'react'
import { View,WebView } from '@tarojs/components'
import './index.scss'

class RowTest extends React.Component {
  render() {
    const { message } = this.props
    return (
      <WebView src={message.src} style={message.style}></WebView>
    )
  }
}

export default class Home extends React.Component {

  render() {

    const webSrcList = [
      'https://m.baidu.com'
    ]
      // 'https://baike.baidu.com/item/%E8%85%BE%E8%AE%AF/112204?fr=ge_ala',
      //  'https://www.qq.com/',
    const webStyle = {
      'width': '100%',
      'height': '300px',
      'padding': '20px',
      'display': 'block'
    }


    const webInfo = []
    for (let i = 0; i < 1; i++) {
      webInfo[i] = {
        id: i,
        style: webStyle,
        src: webSrcList[i]
      }
    }

    return (
      <View className='container'>
        <View>
          {webInfo.map((item) => (
            <RowTest key={item.id} message={item}></RowTest>
          ))}
        </View>
      </View>
    )
  }
}



