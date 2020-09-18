import {createStore} from 'redux'
import reducers, {defaultState} from '../reducers'
console.log('reducers: ', reducers);

export default createStore(reducers,defaultState)