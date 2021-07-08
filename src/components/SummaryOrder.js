import React from 'react';
import './SummaryOrder.css';
import ItemCart from './ItemCart.js';
import { useOrder, useOrderDelete } from '../components/CartContext';
import { Link, Redirect } from 'react-router-dom';
import { addItemFirebase } from '../firebase';
import { useAlert } from 'react-alert';

function SummaryOrder() {
  const alert = useAlert();
  const Order = useOrder();
  const { deleteOrder } = useOrderDelete();
  const btnComprar = () => {
    addItemFirebase(Order);
    deleteOrder();
    alert.success('Gracias por su compra!');
  };
  const btnDelete = () => {
    deleteOrder();
    alert.success('Se ha vaciado el carrito');
  };
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
                  index={index}
                />
              );
            })}
          </div>
          <div className="back-to-shop">
            <Link to="/types-candy">← Productos</Link>
            <span className="text-muted"></span>
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
              {' '}
              Cantidad de Items
            </div>
            <div className="col text-right fs-3">
              {Order.reduce((acu, element) => acu + element.quantity, 0)}
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
            style={{
              borderTop: '1px solid rgba(0,0,0,.1)',
              padding: '2vh 0',
            }}
          >
            <div className="col">TOTAL</div>
            <div className="col text-right">
              ${Order.reduce((a, b) => a + b.price * b.quantity, 0)}
            </div>
          </div>{' '}
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={btnDelete}>
              Vaciar Carrito
            </button>
            <button className="btn btn-dark" onClick={btnComprar}>
              Comprar
            </button>
          </div>
        </div>
      </div>
      {Order.length === 0 && <Redirect to="/types-candy" />}
    </div>
  );
}

export default SummaryOrder;
