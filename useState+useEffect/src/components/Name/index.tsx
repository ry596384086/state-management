import React, { FC } from 'react'
import { useGlobalStates } from '@/store/global-states'

const Name: FC = () => {
  const { name } = useGlobalStates()
  console.log('NameRerendered')
  return (
    <div>
      <p>name:{name}</p>
    </div>
  )
}

export default Name
