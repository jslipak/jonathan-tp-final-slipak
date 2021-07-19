import React, { useState } from 'react';
import './SummaryOrder.css';
import ItemCart from './ItemCart.js';
import { useOrder, useOrderDelete } from '../components/CartContext';
import { Link, Redirect } from 'react-router-dom';
import { addItemFirebase } from '../firebase';
import { useAlert } from 'react-alert';

function SummaryOrder() {
  const [buyer, setBuyer] = useState({});
  const alert = useAlert();
  const Order = useOrder();
  const { deleteOrder } = useOrderDelete();
  const btnComprar = (event) => {
    event.preventDefault();
    alert.info('Su orden esta siendo procesada, \n Espere!');
    event.target.disabled = true;
    addItemFirebase(Order, buyer).then((id) => {
      deleteOrder();
      alert.success(`Orden numero: \n ${id},\n Gracias por su compra!`);
    });
  };
  const btnDelete = () => {
    deleteOrder();
    alert.success('Se ha vaciado el carrito');
  };

  const makeBuyer = (event, type) => {
    console.log(event);
    let temp = { ...buyer };
    switch (type) {
      case 'name':
        temp.name = event.target.value;
        break;
      case 'email':
        temp.email = event.target.value;
        break;
      case 'phone':
        temp.phone = event.target.value;
        break;
      default:
        console.log(temp);
    }

    console.log(temp);
    setBuyer(temp);
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
              Cantidad de Items
            </div>
            <div className="col text-right fs-3">
              {Order.reduce((acu, element) => acu + element.quantity, 0)}
            </div>
          </div>
          <form onSubmit={btnComprar}>
            <p>Nombre</p>{' '}
            <input
              onChange={(e) => {
                makeBuyer(e, 'name');
              }}
              type="text"
              className="text-muted"
              required
            />
            <p>Email</p>{' '}
            <input
              onChange={(e) => makeBuyer(e, 'email')}
              type="email"
              className="text-muted"
              required
            />
            <p>Teléfono</p>{' '}
            <input
              onChange={(e) => makeBuyer(e, 'phone')}
              type="text"
              className="text-muted"
              required
            />
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
              <button className="btn btn-dark" type="submit">
                Comprar
              </button>
            </div>
          </form>
        </div>
      </div>
      {Order.length === 0 && <Redirect to="/types-candy" />}
    </div>
  );
}

export default SummaryOrder;
