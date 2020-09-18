import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo'
import {toggleTodo} from '../../actions'
import {connect} from 'react-redux'

function TodoList({todos, onTodoClick}){
    return (
        <ul>
            {
                todos.map( (todo,idx) =><Todo key={idx} {...todo} onClick={()=>onTodoClick(idx)}></Todo>)
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

function getVisibleTodoList(todos = [], filter){
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(todo=>todo.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(todo=>!todo.completed)
        default:
            return todos
    }
}

function mapStateToProps(state){
    const {todoApp} = state
    return {
        todos: getVisibleTodoList(todoApp.todos, todoApp.visibilityFilter)
    }
}

function mapDispachToProps(dispatch){
    return {
        onTodoClick: (id)=>{
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispachToProps
)(TodoList)

export default VisibleTodoList