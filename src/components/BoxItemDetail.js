import React, { useState } from 'react';
import Counter from './ItemCount';
import './BoxItemDetail.css';
import { useOrder, useOrderUpdate } from './CartContext';

function BoxItemDetail(props) {
  const [counter, setCounter] = useState(0);
  const order = useOrder();
  const setOrder = useOrderUpdate();
  console.log(order);

  function addOneItem(event) {
    console.log(event);
    return setCounter(counter + 1);
  }
  function subOneItem(event) {
    console.log(event);
    counter > 0
      ? setCounter(counter - 1)
      : console.log('tiene que ser mayor a 0');
  }
  return (
    <main>
      <div className="card">
        <div className="card__title">
          <div className="icon">
            <a href="/notFound">
              <i className="fa fa-arrow-left"></i>
            </a>
          </div>
          <h3>New products</h3>
        </div>
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h1>{props.title}</h1>
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
              <p>{props.text}</p>
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
            <Counter
              addItem={addOneItem}
              subItem={subOneItem}
              counter={counter}
            />
          </div>
          <div className="action">
            {counter > 0 ? (
              <button
                type="button"
                data-product-id={props.productId}
                onClick={setOrder}
              >
                Add to cart
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-lg disabled"
                disabled
              >
                add Something
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BoxItemDetail;
