import React from 'react'
import './Header.css'

function Header({todos, addTodo, onChange, inputValue}) {

 
  return(
    <div className="header-container">
    <div className="lengthOfTodos">
    <h2>Today</h2>
    <p id="length">{todos.length} todos</p>
    </div>
    <input type="text" 
         value={inputValue}
         placeholder="  Entre the text...  " 
         onChange={(x) => onChange(x)}
          
         />
    <button
      onClick={() => addTodo(inputValue)}
    > Ajouter</button>
</div>   
  )
}


export default Header