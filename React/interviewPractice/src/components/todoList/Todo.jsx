import React,{useState} from 'react'
import "./todo.css"
import { TodoContext } from './contex/todoContex';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoResult from './TodoResult';
const init = [
    {
        title:"reading javascript",
        id:1,
        isChecked:false
    },
    {
        title:"practice reactJS",
        id:2,
        isChecked:true
    }
]

const Todo = () => {
    const [todos,setTodos] = useState(init)
  return (
    <TodoContext.Provider value={{todos,setTodos}} >
        {/* todoList */}
        <TodoList />
        {/* todoresult */}
        <TodoResult />
        {/* todoInput */}
        <TodoInput />
        

    </TodoContext.Provider>
  )
}

export default Todo