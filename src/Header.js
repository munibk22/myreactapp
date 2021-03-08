import React, {useState, useRef, useEffect} from 'react'
import ToDoList from './ToDoList'
import uuidv4 from 'uuid/dist/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'
export default function Header() {
    let [todos, setTodos]=useState([]);
    let todoNameRef = useRef();
useEffect(() =>
{
    let storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

if (storedTodos) setTodos(storedTodos)
},[])

    useEffect(()=>
    {
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])
    
let addToDO = (e) =>
{
const name = todoNameRef.current.value
if (name ==='') return
setTodos(prevTodos =>
    {
        return [...prevTodos, {id: uuidv4(), name: name, complete:false}]
    })
todoNameRef.current.value = null

}
let changeHandler = (id) =>
{
let newTodos = [...todos]
let todo = newTodos.find(todo => todo.id === id)
todo.complete = !todo.complete
setTodos(newTodos)

}

let handleClearEvent= ()=>
{
    let newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
}
    return (
        <>
        <header className="App-header">
        <ToDoList todos={todos} toggleTodos={changeHandler}/>
        Enter Task
        
<input ref={todoNameRef} type='text' />
<button className='btn-primary' onClick={addToDO}
>Add ToDO</button>


<button onClick={handleClearEvent}>Clear Completed T</button>
<div>{todos.filter(todo => !todo.complete).length} left to do</div>
              
      </header>
      </>
    )
}

