// import {combineReducers} from 'redux'
import todoApp from './todoApp'

export const defaultState = {
    todoApp: {}
}

// export default combineReducers({
//     todoApp
// })
export default function(state, action){
    return {
        todoApp: todoApp(state.todoApp,action)
    }
} 