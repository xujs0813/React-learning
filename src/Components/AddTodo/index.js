import React from 'react'
import {addTodo} from '../../store/actions'
import {connect} from 'react-redux'

function AddTodoForm({dispatch}){
    let inputRef 
    return (
        <div>
            <form
                onSubmit={
                    (e)=>{
                        e.preventDefault()
                        let value = inputRef.value.trim()
                        if(!value) return 
                        dispatch(addTodo(value))
                        inputRef.value = ''
                    }
                }>
                <input ref={node => inputRef = node}></input>
                <button type='submit'>add todo</button>
            </form>
        </div>
    )
}

const AddTodo = connect()(AddTodoForm)

export default AddTodo