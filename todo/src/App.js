import React,{ useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList'


function App() {
 
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  function addTodo(dataValue) {

      setTodos([...todos, {
        id: todos.length,
        todoName: dataValue
      }])
      setInputValue('')
  }

  function changeInputValue(e) {
    setInputValue(e.target.value)
}

  function removeTodo(dataValue) {
    const todosRemoved = todos.filter(todo => todo.todoName !== dataValue )
    setTodos(todosRemoved)
  }



  return (
    
    <div className="container">
       <Header todos={todos}
          addTodo={addTodo}
          onChange = {changeInputValue}
          inputValue={inputValue}
       />
       <TodoList todos={todos}
          removeTodo = {removeTodo}

       />
    </div>
  );
}
export default App;
