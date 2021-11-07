import React from 'react'
export const state = {
  count: 0,
  name: 'ry'
}

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ModifyCount':
      return {
        ...state,
        count: payload
      }
    case 'ModifyName':
      return {
        ...state,
        name: payload
      }
    default: {
      return state
    }
  }
}

export const GlobalContext = React.createContext(null)
