import {
  createStore,
  applyMiddleware,
  StoreEnhancer,
  StoreEnhancerStoreCreator,
  Store
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

// 生成store增强器
const storeEnhancer: StoreEnhancer = applyMiddleware(thunk)
const storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(createStore)

const store: Store = storeEnhancerStoreCreator(reducer)

export default store
