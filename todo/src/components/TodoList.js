import React from 'react';
import Todo from './Todo'


function TodoList({todos, removeTodo}) {

    return(
        todos.map((todo, index) => <Todo
            key={index}
            todo={todo}
            removeTodo = {removeTodo}
           /> )
    )
}   



export default TodoList
