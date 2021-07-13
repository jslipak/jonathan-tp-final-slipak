import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Categories from './components/Categories.js';
import Candies from './pages/Candies';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import ItemDetail from './pages/ItemDetail.js';
import { Container } from 'react-bootstrap';
import { CartContext } from './components/CartContext';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

function App() {
  const options = {
    timeout: 2000,
    position: positions.MIDDLE,
  };
  return (
    <Router>
      <Provider template={AlertTemplate} {...options}>
        <CartContext>
          <div className="App">
            <NavBar />
            <Container className="contenedor">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/category/:category_id"
                  component={Categories}
                />
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
      </Provider>
    </Router>
  );
}

export default App;
