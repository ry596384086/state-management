import React, { FC } from 'react'
import { observer, inject } from 'mobx-react'

// 类组件用装饰器注入，方法如下
// @inject('store1')
// @observer
interface Props {
  store1?: any
}
const Count: FC<Props> = (props) => {
  console.log('props', props)
  const { count, addCount } = props.store1
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={addCount}>addCount</button>
    </div>
  )
}
// 函数组件用Hoc，方法如下（本文统一使用函数组件）
export default inject('store1')(observer(Count))
