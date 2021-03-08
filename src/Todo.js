import React from 'react'

export default function Todo({todo, toggleTodos}) {

   let changeHandler = () =>
   {
toggleTodos(todo.id)

   }
    return (      <div>   {todo.name}   

            <label>
<input type='checkbox' checked={todo.complete} className='ml-2'
onChange={changeHandler}
/>
          
            </label>
                    
        </div>
    )
}
