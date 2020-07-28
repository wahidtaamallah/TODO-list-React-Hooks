import React, {useState} from 'react'
import Todo from './Todo'
const handleSubmit = (e, todoList, setTodoList, input, setInput) => {
    e.preventDefault()
    const id = (todoList.lenght) ? todoList[todoList.lenght - 1].id + 1 : 0

  setTodoList([...todoList, {id: id, message: input}])
  setInput('')
}

const deleteTodo = (id, todoList, setTodoList) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
}

 export default  () => {
     const [todoList, setTodoList] = useState([
         {id: 1, message: ' '},
     ])
     const [input, setInput] = useState('  ')
 
    return (
    <div className="TodoList">
        <form onSubmit={(e) => handleSubmit(e, todoList, setTodoList, input, setInput)}>
            <input onChange={(e) => setInput(e.target.value) } value={input}/>
            <button type="submit">Add</button>
        </form>
        {todoList.map(todo => (
            <Todo message={todo.message} id={todo.id} deleteTodo={(id) => deleteTodo(id, todoList, setTodoList)}/>
        ))}        
    </div>
  )
} 
  
