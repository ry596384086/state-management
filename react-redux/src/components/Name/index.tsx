import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AddState } from 'src/store/reducers/addReducer'
import { CombinedState } from 'src/store/reducers'
import * as types from '@/store/action.types'

// 声明参数接口
interface Props {
  name: string
}

const Name: FC<Props> = (props) => {
  const { name } = props
  console.log('NameRerendered')
  return (
    <div>
      <p>name: {name}</p>
    </div>
  )
}

// name变化组件才会rerender
const mapStateToProps = (state: CombinedState) => ({
  name: state.addReducer.name
})

// addReducer内任意属性变化组件都会rerender
// const mapStateToProps = (state: CombinedState) => state.addReducer

export default connect(mapStateToProps)(Name)
