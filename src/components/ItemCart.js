import React, { useState } from 'react';

function ItemCart(props) {
  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={props.thumb} alt="thumb" />
        </div>
        <div className="col">
          <div className="row text-muted">{props.category}</div>
          <div className="row">{props.title}</div>
        </div>
        <div className="col">
          {' '}
          <a href="/ttt" className="btn btn-danger">
            -
          </a>
          <a href="/ttt" className="fs-3">
            {props.quantity}
          </a>
          <a href="/ttt" className="btn btn-success">
            +
          </a>{' '}
        </div>
        <div className="col">
          <span className="close">$ {props.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
