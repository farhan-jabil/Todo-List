import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AddItems from './components/AddItems';
import Todos from './components/Todos';
import { useEffect, useState } from 'react';

function App() {

  let initTodo;
  if (localStorage.getItem("todoItems") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todoItems"));
  }

  const onDelete = (todo) => {
    console.log("I am delete", todo);
    setTodoItems(todoItems.filter((e) => {
      return e !== todo;
    } 
    ));
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }

  const addTodo = (title, desc) => {
    console.log("Add todo", title, desc)
    let sno;
    if (todoItems.length === 0) {
      sno = 1
    }
    else {
      sno = todoItems[todoItems.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(myTodo)
    setTodoItems([...todoItems, myTodo])
  }

  const [todoItems, setTodoItems] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems])

  return (  
    <>
      {/* <Header searchBar={false} /> */}
      {/* <AddItems addTodo={addTodo}/> */}
      <Todos todoItems={todoItems} onDelete={onDelete} addTodo={addTodo}/>
      <Footer />
    </>
  );
}

export default App;
