import {COUNTER_INCREASE,COUNTER_DECREASE} from '../actions/types'

export default function counter(state = 0, action){
    switch(action.type){
        case COUNTER_INCREASE :
            return state + 1
        case COUNTER_DECREASE:
            return state - 1
        default:
            return state
    }
}