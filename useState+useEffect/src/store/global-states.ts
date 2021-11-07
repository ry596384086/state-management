import { useState, useEffect } from 'react'
import {
  GlobalStates,
  GlobalStatesModificationType
} from './global-states.type'

let listeners = []

let globalState: GlobalStates = {
  count: 0,
  name: 'ry'
}

const broadcast = () => {
  listeners.forEach((listener) => {
    listener(globalState)
  })
}

export const modifyGlobalStates = (
  operation: GlobalStatesModificationType,
  payload: any
) => {
  switch (operation) {
    case GlobalStatesModificationType.MODIFY_COUNT:
      globalState = Object.assign({}, globalState, { count: payload })
      break
    case GlobalStatesModificationType.MODIFY_NAME:
      globalState = Object.assign({}, globalState, { name: payload })
      break
  }
  broadcast()
}

export const useGlobalStates = () => {
  const [value, newListener] = useState(globalState)

  useEffect(() => {
    listeners.push(newListener)
    return () => {
      listeners = listeners.filter((listener) => listener !== newListener)
    }
  })

  return value
}
