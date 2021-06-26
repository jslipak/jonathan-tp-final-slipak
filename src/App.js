import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Candies from './pages/Candies';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import ItemDetail from './pages/ItemDetail.js';
import { Container } from 'react-bootstrap';
import { CartContext } from './components/CartContext';
function App() {
  return (
    <Router>
      <CartContext>
        <div className="App">
          <NavBar />
          <Container className="contenedor">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/types-candy">
                <Candies />
              </Route>
              <Route exact path="/product/:product_id">
                <ItemDetail />{' '}
              </Route>
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </CartContext>
    </Router>
  );
}

export default App;

// NOTE: Si pones el context no global cuando vas una de las rutas que no esta wrapeada se blanquea la orden
