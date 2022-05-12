import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
       <h3> Todos List</h3>
       {props.todos.length===0?"Hurray you have done your tasks!!!":
       props.todos.map((todo)=>{
         return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
       })
       }
    </div>
   )
}
