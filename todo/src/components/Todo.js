import React, {useState} from 'react'
import './Todo.css'


function Todo({todo, removeTodo}) {
  const [checkBoxValue, setCheckBoxValue] = useState(false)
      
    return (
        <div className="todo_container">
                <input type="checkbox" 
                 onChange={() => setCheckBoxValue(!checkBoxValue)}
                />
               {
                 checkBoxValue === true ?
                 <p contentEditable="true"
                 className="through"
                >{todo.todoName}</p>
                :
                <p contentEditable="true"
                >{todo.todoName}</p>
               }
              
                            
                <i className="fa fa-trash" 
                   onClick= {() => removeTodo(todo.todoName)}
                ></i>
        </div>
    )
}


export default Todo