import React from 'react';
import Counter from './ItemCount';
import Delete from '../images/delete.svg';
import { useOrderDelete, useOrderChange } from '../components/CartContext';
function ItemCart(props) {
  const deleteItem = useOrderDelete();
  const itemCounterChange = useOrderChange();

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
              itemCounterChange(props.quantity - 1, props.index);
            }}
            addItem={() => {
              itemCounterChange(props.quantity + 1, props.index);
            }}
          />
        </div>
        <div className="col">
          <div className="row text-muted">$/U</div>
          <div className="row">$ {props.price}</div>
          <div className="row"></div>
        </div>
        <div className="col">
          <link onClick={() => deleteItem(props.index)}>
            <img src={Delete} alt="delete" style={{ height: '16px' }} />
          </link>
        </div>
        <div className="col">
          <div className="row"></div>{' '}
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
