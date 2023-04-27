import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {

  return (
    <>
     <Header searchBar={false}/>
     <Todos/>
     <Footer/> 
    </>
  );
}

export default App;
