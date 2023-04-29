import React from 'react'
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
    <div className='container mt-3 w-50'>
      <h3 className='text-center'>Todo list</h3>
      {props.todoItems.length === 0 ? "Nothing to do!" :
        props.todoItems.map((items) => {
            return <TodoItem todoItems={items} key={items.sno} onDelete={props.onDelete} />
          })
      }
    </div>
  )
}
