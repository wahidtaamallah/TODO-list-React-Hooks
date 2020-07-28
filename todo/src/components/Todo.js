import React from 'react'
import './Todo.css'

function Todo ({message, id, deleteTodo}) { 
   return (
   <div className="Todo">
       <p>{message} </p>
    <div><button onClick={() => deleteTodo(id)}>Delete </button></div>
    </div>
  )}
 export default Todo
