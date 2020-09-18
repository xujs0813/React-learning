### LifeCycle 

### 挂载
1. constructor
2. static getDerivedStateFromProps          -> (props, state) : AnyObject | null
   1. 类的静态方法，无法访问实例
   2. render 调用前调用，即不管任何原因导致 rerender 都会执行该方法
   3. 返回 newState 来更新 state; newState 不会影响其它属性更新; 返回 null 不更新; 
   4. 慎用此方法！

-. UNSAFE_componentWillMount
3. render
4. componentDidMount                        -> () : void
   1. 组件挂载后立即调用

### 更新
1. static getDerivedStateFromProps
-. UNSAFE_componentWillReceiveProps
2. shouldComponentUpdate                    -> (nextProps, nextState) : boolean
   1. 根据返回值判断此次是否应该重新渲染，默认返回 true
   2. 仅应该用于 '性能优化'

-. UNSAFE_componentWillUpdate
3. render
4. getSnapshotBeforeUpdate                  -> (prevProps, prevState) : any
   1. 在最近一次渲染输出之前调用。可以使组件在发生更改之前从 DOM 中捕获一些信息。
   2. 将返回值提交给 componentDidUpdate 作为其第三个参数
   3. 次方法较少使用，使用前请参阅[文档](https://react.docschina.org/docs/react-component.html#getsnapshotbeforeupdate)

5. componentDidUpdate                       -> (prevProps, prevState, snapshot) : void
   1. 在更新后立即调用。首次渲染不会执行此方法
   2. 可在此方法中调用 setState, 但必须包裹在判断条件中。否则可能导致死循环。

### 卸载
1. componentWillUnmount
   1. 组件卸载及销毁前调用

### 错误处理
1. static getDerivedStateFromError          -> (error) : AnyObject
   1. 在后代组件抛出错误后被调用
   2. 返回一个值以更新 state

2. componentDidCatch

- 注：UNSAFE 即已不建议使用