import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AddItems from './components/AddItems';
import Todos from './components/Todos';

function App() {

  return (
    <>
     <Header searchBar={false}/>
     {/* <AddItems/> */}
     <Todos/>
     <Footer/> 
    </>
  );
}

export default App;
