import React, { useReducer } from 'react'
import './index.less'
import { state as initState, reducer, GlobalContext } from './store/reducer'
import Count from './components/Count'
import Name from './components/Name'

export default function () {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Count />
        <Name />
      </GlobalContext.Provider>
    </div>
  )
}
