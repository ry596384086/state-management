import { makeAutoObservable } from 'mobx'

class Store2 {
  constructor() {
    // mobx6.0之后必须要加上这一句
    makeAutoObservable(this)
  }
  time = 11111111110
}

const store2 = new Store2()
export default store2
