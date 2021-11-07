import { GlobalContext } from '@/store/reducer'
import React, { FC, useContext } from 'react'

const Count: FC = () => {
  const ctx = useContext(GlobalContext)
  return (
    <div>
      <p>count:{ctx.state.count}</p>
      <button
        onClick={() =>
          ctx.dispatch({ type: 'ModifyCount', payload: ctx.state.count + 1 })
        }
      >
        +1
      </button>
    </div>
  )
}

export default Count
