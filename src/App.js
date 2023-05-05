import './App.css';
import Footer from './components/Footer';
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

  // let checkBoxIDD = document.getElementById(`${`checkboxId` + props.todoItems.sno}`);
  // console.log(checkBoxIDD)

  const onDelete = (todo) => {
    setTodoItems(todoItems.filter((e) => {
      return e !== todo;
    }
    ));
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }

  const allClear = (e) => {
    e.preventDefault();
    localStorage.clear();
  }

  const [checkBoxId, setCheckBoxId] = useState(false);

  const changeCheckState = () => {
    if (checkBoxId === false) {
      setCheckBoxId(true)
    }
    else {
      setCheckBoxId(false)
    }
  }

  const addTodo = (title, desc) => {
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
    setTodoItems([...todoItems, myTodo])
  }

  const [todoItems, setTodoItems] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems])

  return (
    <>
      <h2 className='text-center mt-5'>My Todos</h2>
      <Todos todoItems={todoItems} onDelete={onDelete} allClear={allClear} changeCheckState={changeCheckState} addTodo={addTodo} />
      <Footer />
    </>
  );
}

export default App;
