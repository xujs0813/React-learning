import React from 'react'
import Footer from '../../Components/Footer'
import VisibleTodoList from '../../Components/TodoContainer'
import AddTodo from '../../Components/AddTodo'

export default function TodoList(){
    return (
        <div>
            <h4>Todo List</h4>
            <AddTodo />
            <VisibleTodoList></VisibleTodoList>
            <Footer></Footer>
        </div>
    )
}
