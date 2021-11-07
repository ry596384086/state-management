import React, { FC } from 'react'
import { observer, inject } from 'mobx-react'

interface Props {
  store1?: any
}

const Name: FC<Props> = (props) => {
  const { name } = props.store1
  console.log('NameRerendered')
  return (
    <div>
      <p>name: {name}</p>
    </div>
  )
}
// 函数组件用Hoc，方法如下（本文统一使用函数组件）
export default inject('store1')(observer(Name))
