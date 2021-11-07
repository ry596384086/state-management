import { observable, action, makeObservable } from 'mobx'

class Store1 {
  constructor() {
    makeObservable(this) //mobx6.0之后必须要加上这一句
  }
  @observable
  count = 0

  @observable
  name = 'ry'

  @action
  addCount = () => {
    this.count += 1
  }
}

const store1 = new Store1()
export default store1
