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
    5. reducer 中应该处理 action 的各种 type 
    6. reducer 的 previousState 应该设置默认值，以免 reducer 初始化时报错

3. store 
    1. store = createStore(reducer)  
       保存着 reducer 返回的完整的 state

    2. store.getState()
       获取完整 state 

    3. unsubscribe = store.subscribe(listener) 
       1. state 发生变化，则调用 listener
       2. unsubscribe() 解除监听

    4. store.dispatch(action)  ->  (action: T extends Actions) : T
       1. 调用 reducer 
       2. reducer 会根据 action.type 将 action 中负载的数据传入到 state 中。修改对应 state
