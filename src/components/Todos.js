import React, { useState } from 'react'
import TodoItem from './TodoItem'
import AddItems from './AddItems'

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

  const [addTodo, setAddTodo] = useState("none");
  const [addButtonIcon, setAddButtonIcon] = useState("plus");

  const addTodoButton = () => {
    if (addTodo === "none") {
      setAddTodo("block");
      setAddButtonIcon("minus")
    }
    else {
      setAddTodo("none");
      setAddButtonIcon("plus")
    }
  }

  return (
    <div className='container mt-5 mx-auto'>
      <div className=''>
        <i className={`fa-solid fa-circle-${addButtonIcon} fa-2x float-end`} onClick={addTodoButton} data-bs-toggle="tooltip" data-bs-placement="top" title="Add Todo"></i>
      </div>
      <div className={`addingTodo d-${addTodo}`}>
        <AddItems addTodo={props.addTodo} />
      </div>
      <div className='w-50 mx-auto'>
        <h3 className='text-center my-5'>Todo list</h3>
        {props.todoItems.length === 0 ? "Nothing to do!" :
          props.todoItems.map((items) => {
            return <TodoItem todoItems={items} key={items.sno} onDelete={props.onDelete} />
          })
        }
      </div>
    </div>
  )
}
