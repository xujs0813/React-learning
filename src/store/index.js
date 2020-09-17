import {createStore} from 'redux'
import todoApp from './reducer'
// import {addTodo,toggleTodo,setVisibilityFilter} from '../actions'
// import {VisibilityFilters} from '../actions/types'

const store = createStore(todoApp)

// console.log(store.getState())

// const unsubscribe = store.subscribe(()=>{
//     console.log(store.getState());
// })

// store.dispatch(addTodo('Learn about React'))
// store.dispatch(addTodo('Learn about Redux'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// unsubscribe()

export default store