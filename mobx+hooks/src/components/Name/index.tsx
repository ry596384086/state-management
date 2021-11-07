import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStore1 } from '@/store/'

const Name: FC = () => {
  const { name } = useStore1()
  console.log('NameRerendered')
  return (
    <div>
      <p>name: {name}</p>
    </div>
  )
}

export default observer(Name)
