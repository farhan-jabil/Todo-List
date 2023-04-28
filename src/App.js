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
      <Header searchBar={false} />
      {/* <AddItems/> */}
      <AddItems addTodo={addTodo}/>
      {/* <Todos /> */}
      <Todos todoItems={todoItems} onDelete={onDelete}/>
      <Footer />
    </>
  );

  // let initTodo;
  // if (localStorage.getItem("todos") === null) {
  //   initTodo = [];
  // }
  // else {
  //   initTodo = JSON.parse(localStorage.getItem("todos"));
  // }


  // const onDelete = (todo) => {
  //   console.log("I am ondelete of todo", todo);
  //   // Deleting this way in react does not work
  //   // let index = todos.indexOf(todo);
  //   // todos.splice(index, 1);

  //   setTodos(todos.filter((e) => {
  //     return e !== todo;
  //   }));
  //   console.log("deleted", todos)
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }

  // const addTodo = (title, desc) => {
  //   console.log("I am adding this todo", title, desc)
  //   let sno;
  //   if (todos.length === 0) {
  //     sno = 0;
  //   }
  //   else {
  //     sno = todos[todos.length - 1].sno + 1;
  //   }
  //   const myTodo = {
  //     sno: sno,
  //     title: title,
  //     desc: desc,
  //   }
  //   setTodos([...todos, myTodo]);
  //   console.log(myTodo);
  // }

  // const [todos, setTodos] = useState(initTodo);
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos])

  // return ( 
  //   <> 
  //   {/* <Router> */}
  //     <Header title="My Todos List" searchBar={false} /> 
  //     {/* <Switch> */}
  //         {/* <Route exact path="/" render={()=>{ */}
  //           {/* return( */}
  //           {/* <> */}
  //           <AddItems addTodo={addTodo} />
  //           <Todos todoItems={todos} onDelete={onDelete} /> 
  //           {/* </>) */}
  //         {/* }}>  */}
  //         {/* </Route> */}
  //         {/* <Route exact path="/about"> */}
  //           {/* <About /> */}
  //         {/* </Route>  */}
  //       {/* </Switch>  */}
  //     <Footer />
  //   {/* </Router> */}
  //   </>
  // );
}

export default App;
