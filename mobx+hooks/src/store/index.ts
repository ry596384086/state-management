import React from 'react'
import store1 from './store1'
import store2 from './store2'

// 导出store1
export const storeContext1 = React.createContext(store1)
export const useStore1 = () => React.useContext(storeContext1)

// 导出store2
export const storeContext2 = React.createContext(store2)
export const useStore2 = () => React.useContext(storeContext2)
