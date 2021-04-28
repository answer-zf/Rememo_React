import { createStore } from 'redux'

const dateReducer = (state = 0, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD':
      return state + 1 + action.payload

    default:
      return state
  }
}

const store = createStore(dateReducer)

export default store

// 1. 使用createStore 创建 store,入参为reducer函数
//    - reducer 函数入参 state(一个应用只能有一个)，action 操作
// 2. 引入store，使用store.getState()获取数据，
// 3. 使用 store.dispatch() 做事件派发，入参为对象，type:操作方式，payload:携带信息
// 4. 使用 store.subscribe(()=>{this.forceUpdate()}) 更新视图并刷新。

// 由于 reducer 是纯函数，不能修改state数据，只能返回一个全新的对象，state是只读的
