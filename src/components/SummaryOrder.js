import React, { useEffect } from 'react';
import './SummaryOrder.css';
import ItemCart from './ItemCart.js';
import { useOrder } from '../components/CartContext';
function SummaryOrder() {
  const Order = useOrder();
  useEffect(() => {}, [Order]);
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Shopping Cart</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {Order.length} items
              </div>
            </div>
          </div>

          <div className="scrollV">
            {Order.map((item, index) => {
              return (
                <ItemCart
                  key={item.id}
                  thumb={item.thumb}
                  category={item.category}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.price}
                  thumb={item.thumbnail}
                  index={index}
                />
              );
            })}
          </div>
          <div className="back-to-shop">
            <a href="/ttt">←</a>
            <span className="text-muted">Back to shop</span>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Resumen</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: 0 }}>
              ITEMS {Order.length}
            </div>
            <div className="col text-right">
              ${Order.reduce((a, b) => a + b.price * b.quantity, 0)}
            </div>
          </div>
          <form>
            <p>Envio</p>{' '}
            <select>
              <option className="text-muted">Standard-Delivery- €5.00</option>
            </select>
            <p>Cupon de Descuento</p>{' '}
            <input id="code" placeholder="Enter your code" />
          </form>
          <div
            className="row"
            style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}
          >
            <div className="col">TOTAL</div>
            <div className="col text-right">$ 137.00</div>
          </div>{' '}
          <button className="btn btn-dark">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default SummaryOrder;
