import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {

  // let initTodo;
  // if(localStorage.getItem("todoItems") === null){
  //   initTodo = [];
  // }
  // else{ 
  //   initTodo = JSON.parse(localStorage.getItem("todoItems"));
  // }

  // const [todoItems, setTodoItems] = useState(initTodo)

  // const onDelete = (todo) => {
  //   console.log("I am delete", todo);
  //   setTodoItems(todoItems.filter((e) => e !== todo
  //   ));
  //   localStorage.setItem("todoItems", JSON.stringify(todoItems));
  // }

  return (
    <div className='container mt-3'>
      <h3 className='text-center'>Todo list</h3>
      {props.todoItems.length === 0 ? "Nothing to do!" :
        props.todoItems.map((items) => {
            return <TodoItem todoItems={items} key={items.sno} onDelete={props.onDelete} />
          })
      }
    </div>

    // <div className="container">
    //   <h3 className="my-3">Todos List</h3>
    //   {props.todos.length === 0 ? "No Todos to display" :
    //     props.todos.map((todo) => {
    //       console.log(todo.sno);
    //       return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
    //       )
    //     })
    //   }
    // </div>
  )
}
