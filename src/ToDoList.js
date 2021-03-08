import React from 'react'
import Todo from './Todo'

export default function ToDoList({todos,toggleTodos}) {
    return (
                todos.map(todo =>
               {   return <Todo key={todo.id} toggleTodos={toggleTodos} todo={todo}>
                   
               </Todo>
               })
         
    )
}

