import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import Counter from '../components/ItemCount';

function ItemDetail(props) {
  const [itemCounter, setItemCounter] = useState(0);
  useEffect((event) => {
    console.log(itemCounter);
  });
  return (
    <main>
      <div className="card">
        <div className="card__title">
          <div className="icon">
            <a href="#">
              <i className="fa fa-arrow-left"></i>
            </a>
          </div>
          <h3>New products</h3>
        </div>
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h1>{props.location.state.title}</h1>
              <p className="sub">Office Chair</p>
              <p className="price">$210.00</p>
            </div>
            <div className="image">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <p>{props.location.state.text} </p>
            </div>
            <span className="stock">
              <i className="fa fa-pen"></i> In stock
            </span>
            <div className="reviews">
              <ul className="stars">
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star-o"></i>
                </li>
              </ul>
              <span>(64 reviews)</span>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="recommend">
            <Counter />
          </div>
          <div className="action">
            <button type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemDetail;

// NOTE: se que hay otra forma de pasar datos que esta , pero hasta que veamos base de datos voy a usar esta forma
