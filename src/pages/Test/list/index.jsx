import React from 'react'
import { View } from '@tarojs/components'
import './index.scss'


export default class ListTest extends React.Component {

  render() {
    
    const random = (max) => Math.round(Math.random() * 1000) % max

    const A = ['pretty', 'large', 'big', 'small', 'tall', 'short', 'long', 'handsome', 'plain', 'quaint', 'clean',
      'elegant', 'easy', 'angry', 'crazy', 'helpful', 'mushy', 'odd', 'unsightly', 'adorable', 'important', 'inexpensive',
      'cheap', 'expensive', 'fancy']
    const C = ['red', 'yellow', 'blue', 'green', 'pink', 'brown', 'purple', 'brown', 'white', 'black', 'orange']
    const N = ['table', 'chair', 'house', 'bbq', 'desk', 'car', 'pony', 'cookie', 'sandwich', 'burger', 'pizza', 'mouse',
      'keyboard']

    let nextId = 1

    const data = new Array(1000)

    for (let i = 0; i < 1000; i++) {
      data[i] = {
        id: nextId++,
        label: `${A[random(A.length)]} ${C[random(C.length)]} ${N[random(N.length)]}`,
        style: {
          height: '50px',
          backgroundColor: C[random(C.length)]
        }
      }
    }


    return (
      <View className='container'>
        <View>
          {data.map((item) => (
            <View key={item.id} style={item.style}>{item.label}</View>
          ))}
        </View>
      </View>
    )
  }
}


