import * as types from '../action.types'
import { AnyAction } from 'redux'

// 定义参数接口
export interface AddState {
  count: number
  name: string
}

// 初始化state
let initialState: AddState = {
  count: 0,
  name: 'ry'
}

// 返回一个reducer
export default (state: AddState = initialState, action: AnyAction): AddState => {
  switch (action.type) {
    case types.ADD:
      return { ...state, count: state.count + action.payload }
    default:
      return state
  }
}
