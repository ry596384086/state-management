import { GlobalContext } from '@/store/reducer'
import React, { FC, useContext } from 'react'

const Name: FC = () => {
  const ctx = useContext(GlobalContext)
  console.log('NameRerendered')
  return (
    <div>
      <p>name:{ctx.state.name}</p>
    </div>
  )
}

export default Name
