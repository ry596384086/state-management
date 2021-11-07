import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AddState } from 'src/store/reducers/addReducer'
import { CombinedState } from 'src/store/reducers'
import * as types from '@/store/action.types'

// 声明参数接口
interface Props {
  count: number
  add: (num: number) => void
}

// ReturnType获取函数返回值类型,&交叉类型(用于多类型合并)
// type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const Count: FC<Props> = (props) => {
  const { count, add } = props
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => add(5)}>addCount</button>
    </div>
  )
}

// 这里相当于自己手动做了映射，只有这里映射到的属性变化，组件才会rerender
const mapStateToProps = (state: CombinedState) => ({
  count: state.addReducer.count
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    add(num: number = 1) {
      // payload为参数
      dispatch({ type: types.ADD, payload: num })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
