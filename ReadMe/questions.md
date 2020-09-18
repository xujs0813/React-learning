### questions about redux & react-redux

1. store.dispatch(action) 是怎样执行的？

2. const Container = connet()(View) connet 做了什么？
    1. [connect](https://react-redux.js.org/api/connect)

3. connect = (mapStateToProps, mapDispatchToProps?, mergeProps?, options?)

4. mapStateToProps = (state, ownProps?): Object

5. mapDispatchToProps = (dispatch, ownProps): Object | Object

6. combineReducers 做了什么?


7. dispatch(action) 做了什么？
   1. 执行 reducer ,其为 createStore 中传入的那个 reducer : reducer(state, action)
   2. state 为当前的 state
   3. 每次仅允许一个 reducer 执行。(通过 isDispatching 标志位进行限制)
   4. dispatch 之后将执行 listeners
   
8. 为什么 dispatch(action) 可以引起 state 的变化？
   1. 其执行 reducer(state, action) 即 root-reducer
   2. root-reducer 详情见 9

9. root-reducer
   1. state 是一个树型普通对象，而 state 中的每个子属性都可以看做一个 state, 
      从而，整个 state 可以看做一个 state 树
   2. 每个 state 都可以等价于一个 reducer(state, action)
   3. 因此 state 可以看做是 reducer 构建的树，即 root-reducer 也是一个 reducer 构建出来的树
   4. root-reducer: {
        [prop: string]: reducer() as state
      }
   5. 由 4 可见, root-reducer 每次执行，其每个子 reducer 都会立即执行从而得到各自的 state 用以更新 root-state
   
10. 9.5 提到, 一次 dispatch 将会引起所有 reducer 的执行，那么会导致所有使用了 store 的组件更新吗？
