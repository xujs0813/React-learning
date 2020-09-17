### Redux

- 需要遵循严格的单向数据流

1. action 
    1. 描述对象
    2. 需要有 type 作为描述

2. reducer
    1. nextState = reducer(prevState, action)
    2. 必须是纯函数
    3. store.dispatch(action) 将调用对应 reducer, 并将 nextState 存入 store
    4. 根 reducer 应该将多个 reducer 合并成单个 state ，而非创建多个 state

3. store 
    1. store = createStore(reducer)  
       保存着 reducer 返回的完整的 state

    2. store.getState()
       获取完整 state 

    3. unsubscribe = store.subscribe(listener) 
       1. state 发生变化，则调用 listener
       2. unsubscribe() 解除监听
