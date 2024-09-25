import React from 'react'
import { View, Image} from '@tarojs/components'
import './index.scss'





export default class ImageTest extends React.Component {

  render() {
    
    const random = (max) => Math.round(Math.random() * 1000) % max

    const A = ['pretty', 'large', 'big', 'small', 'tall', 'short', 'long', 'handsome', 'plain', 'quaint', 'clean',
      'elegant', 'easy', 'angry', 'crazy', 'helpful', 'mushy', 'odd', 'unsightly', 'adorable', 'important', 'inexpensive',
      'cheap', 'expensive', 'fancy']
    const C = ['red', 'yellow', 'blue', 'green', 'pink', 'brown', 'purple', 'brown', 'white', 'black', 'orange']
    const N = ['table', 'chair', 'house', 'bbq', 'desk', 'car', 'pony', 'cookie', 'sandwich', 'burger', 'pizza', 'mouse',
      'keyboard']

      const imageList = [
      "https://gd-hbimg.huaban.com/7385b50205bc4ac8549010b9085bdc0a94073ae416a7bb-d3csbk_fw658webp",
      "https://gd-hbimg.huaban.com/3d8da028e3d71a809005107020c0b5cea74727f213b214-10YUyb",
      "https://gd-hbimg.huaban.com/21959f9bd08ee410c5df03a1e0f22312c076ef25fad04-kAKEF0_fw658webp",
      "https://gd-hbimg.huaban.com/aeb5af44a1510cc705af59cb64ab83ba1c205df65b9adb-s4FApF_fw658webp",
      "https://gd-hbimg.huaban.com/6220247ef4b4b7e7721938acbbd33c102af6026616c611-LwHRg4_fw658webp",
      "https://gd-hbimg.huaban.com/3ae100b3eaa86cedb2a7fb476e2ba48df8276a64423d55-pXr8aU_fw658webp",
      "https://gd-hbimg.huaban.com/c684cc28ab065c43f930e3a4ec1525863b25a9fbbe4df-SJmact_fw658webp",
      "https://gd-hbimg.huaban.com/f7c23604a5851097b122e753c17330232a7a1e4461eb7-ZGwDZ9_fw658webp",
      "https://gd-hbimg.huaban.com/16a7cc0571fd45e3faf7e502bcf7afa91aee4d4d94444-de52Nl_fw658webp",
      "https://gd-hbimg.huaban.com/82052794ea11974db16f0ceeca9b2da8a2c75193171e90-VOZwN3_fw658webp",
      "https://gd-hbimg.huaban.com/a7814863b57565a51012db6a0f7cceb9ce2183ef1d2748-9mLs8R_fw658webp",
      "https://gd-hbimg.huaban.com/bc4d180e21ca453ef73104d1520f9c2b6b745b25d9273-VeDHqi_fw658webp",
      "https://gd-hbimg.huaban.com/6fb436871b4d44fb41006c5346e2fc09e0dd66662802ea-vMYgGp_fw658webp",
      "https://gd-hbimg.huaban.com/2cb5b66ebe1e6c37c15edea14b3bd8b75bd45efe5f7e64-7WIWcn_fw658webp",
      "https://gd-hbimg.huaban.com/ca012fdfd2a7b26adbfe36ff98c0e2d53f8b9ab849615-R4QKjT_fw240webp",
      ]

    let nextId = 1

    const data = new Array(1000)

    const imgStyle = {
      'width':'700px',
      'height':'30px',
      'object-fit':'fill'
    }

    for (let i = 0; i < 1000; i++) {
      data[i] = {
        id: nextId++,
        label: `${A[random(A.length)]} ${C[random(C.length)]} ${N[random(N.length)]}`,
        style: imgStyle,
        src:imageList[random(imageList.length)]
      }
    }


    return (
      <View className='container'>
        <View>
          {data.map((item) => (
            <Image key={item.id} style={imgStyle} src={item.src} alt={item.label}></Image>
          ))}
        </View>
      </View>
    )
  }
}


