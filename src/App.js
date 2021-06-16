import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Candies from './pages/Candies.js';
import NotFound from './pages/NotFound.js';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/types-candy" component={Candies} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
