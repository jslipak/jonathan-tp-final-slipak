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
      <div className="App">
        <NavBar />
        <Container className="contenedor">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cart">
              <CartContext>
                <Cart />
              </CartContext>
            </Route>
            <Route exact path="/types-candy">
              <CartContext>
                <Candies />
              </CartContext>
            </Route>
            <Route exact path="/product/:product_id">
              <CartContext>
                <ItemDetail />{' '}
              </CartContext>
            </Route>
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
