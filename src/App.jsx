import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div>

      <BrowserRouter>

      <NavBar/>
      
      <ItemListContainer/>

      </BrowserRouter>

      
    </div>  
  );
}

export default App;
