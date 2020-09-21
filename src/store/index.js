import {createStore} from 'redux'
import reducers, {defaultState} from './reducers'

export default createStore(reducers,defaultState)