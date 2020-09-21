import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        increase: PropTypes.func.isRequired,
        decrease: PropTypes.func.isRequired
    }
    increaseIfOdd = ()=>{
        if(this.props.value % 2 === 0){
            this.props.increase()
        }
    }
    increaseAsync = ()=>{
        setTimeout(()=>{
            this.props.increase()
        },500)
    }
    render() { 
        return ( 
            <div>
                <p>Counter: {this.props.value}</p>
                <p>
                    <button onClick={this.props.decrease}>Decrease</button>
                    {' '}
                    <button onClick={this.props.increase}>Increase</button>
                    {' '}
                    <button onClick={this.increaseIfOdd}>Increase if odd</button>
                    {' '}
                    <button onClick={this.increaseAsync}>Increase Async</button>
                </p>
            </div>
         );
    }
}
 
export default Counter;