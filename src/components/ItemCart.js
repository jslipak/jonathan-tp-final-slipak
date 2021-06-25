import React, { useState } from 'react';

function ItemCart() {
  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col-2">
          <img
            className="img-fluid"
            src="https://i.imgur.com/1GrakTl.jpg"
            alt="test"
          />
        </div>
        <div className="col">
          <div className="row text-muted">Shirt</div>
          <div className="row">Cotton T-shirt</div>
        </div>
        <div className="col">
          {' '}
          <a href="/ttt" className="btn btn-danger">
            -
          </a>
          <a href="/ttt" className="fs-3">
            1
          </a>
          <a href="/ttt" className="btn btn-success">
            +
          </a>{' '}
        </div>
        <div className="col">
          € 44.00 <span className="close">✕</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
