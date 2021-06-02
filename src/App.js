//import logo from './images/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js'

const GREETTING= `Bienvenidos a 80th food Store!`

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={GREETTING} />
    </div>
  );
}

export default App;
