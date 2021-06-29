import React from 'react';
import Counter from './ItemCount';
import Delete from '../images/delete.svg';
import { useOrderDelete, useOrderChange } from '../components/CartContext';
function ItemCart(props) {
  const deleteItem = useOrderDelete();
  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col">
          <img className="img-fluid" src={props.thumb} alt="thumb" />
        </div>
        <div className="col">
          <div className="row text-muted">{props.category}</div>
          <div className="row">{props.title}</div>
        </div>
        <div className="col">
          <Counter
            className="col"
            counter={props.quantity}
            subItem={() => {
              console.log('aca funcion que tengo que escribir');
            }}
            addItem={() => {
              console.log('aca funcion que tengo que escribir');
            }}
          />
        </div>
        <div className="col">
          <div className="row text-muted">$/U</div>
          <div className="row">$ {props.price}</div>
          <div className="row"></div>
        </div>
        <div className="col">
          <a onClick={() => deleteItem(props.index)}>
            <img src={Delete} alt="delete" style={{ height: '16px' }} />
          </a>
        </div>
        <div className="col">
          <div className="row"></div>{' '}
        </div>
      </div>
    </div>
  );
}

export default ItemCart;

//<div className="col">
//<a href="/ttt" className="btn btn-danger">
//-
//</a>
//<a href="/ttt" className="fs-2">
//{props.quantity}
//</a>
//<a href="/ttt" className="btn btn-success">
//+
//</a>{' '}
//</div>
