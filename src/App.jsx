import './App.css'
import Titulo from './components/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <div>
      <NavBar />
      
      <ItemListContainer saludo="Los mejores mates de Argentina"/>
    </div>
    )
}

export default App
