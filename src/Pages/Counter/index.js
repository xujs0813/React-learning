import React from "react";
import Counter from '../../Components/Counter'
import {createStore} from 'redux'
import counter from '../../store/reducers/counter'
import {COUNTER_INCREASE,COUNTER_DECREASE} from '../../store/actions/types'
const store = createStore(counter)

export default class CounterPage extends React.Component{
    componentDidMount(){
        store.subscribe(this.forceUpdate.bind(this))
    }

    increase = ()=>{
        store.dispatch({
            type: COUNTER_INCREASE
        })
    }
    decrease = ()=>{
        store.dispatch({
            type: COUNTER_DECREASE
        })
    }
    render(){
        const value = store.getState()
        return (
            <Counter value={value} increase={this.increase} decrease={this.decrease}></Counter>
        )
    }
}