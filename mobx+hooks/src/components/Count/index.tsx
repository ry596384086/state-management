import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStore1 } from '@/store/'

// 类组件用装饰器注入，方法如下
// @inject('store1')
// @observer

const Count: FC = () => {
  const { count, addCount } = useStore1()
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={addCount}>addCount</button>
    </div>
  )
}
// 函数组件用Hoc，方法如下（本文统一使用函数组件）
export default observer(Count)
