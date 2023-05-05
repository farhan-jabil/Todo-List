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
    // localStorage.removeItem(`${`checkBox5`}`);
    // console.log(localStorage.getItem(`${`checkBox` + JSON.stringify(todoItems.sno)}`));
    // console.log(object)
  }

  // console.log(sno)

  const allClear = (e) => {
    e.preventDefault();
    localStorage.clear();
    // console.log("dd")
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

  // let boxes = document.getElementsByClassName('todoCheckClass').length + 1;
  // const save = () =>  {
  //   for(let i = 1; i <= boxes; i++){
  //     let checkbox = document.getElementById(`${`checkboxId` + i}`);
  //     localStorage.setItem("checkbox" + i, checkbox.checked);	
  //   }
  // }

  // for(let i = 1; i <= boxes; i++){
  //   if(localStorage.length > 0){
  //     let checked = JSON.parse(localStorage.getItem(todoItems));
  //     document.getElementById(`${`checkboxId` + i}`).checked = checked;
  //   }
  // }
  // window.addEventListener('change', save);


  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems])

  return (
    <>
      {/* <Header searchBar={false} /> */}
      {/* <AddItems addTodo={addTodo}/> */}
      <h2 className='text-center mt-5'>My Todos</h2>
      <Todos todoItems={todoItems} onDelete={onDelete} allClear={allClear} changeCheckState={changeCheckState} addTodo={addTodo} />
      <Footer />
    </>
  );
}

export default App;
