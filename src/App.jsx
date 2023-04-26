import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Item } from './components/item/item';
import { ItemList } from './components/ItemList/ItemList';


function App() {
  return (
    <div>
      <NavBar/>
      <Item/>
      <ItemListContainer/>
    </div>  
  );
}

export default App;
