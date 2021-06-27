import React, { useState } from 'react';
import Counter from './ItemCount';
import './BoxItemDetail.css';
import { useOrder, useOrderUpdate } from './CartContext';

function BoxItemDetail(props) {
  const [counter, setCounter] = useState(0);
  const setOrder = useOrderUpdate();

  function addOneItem() {
    return setCounter(counter + 1);
  }
  function subOneItem() {
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
              <p className="price">$ {props.price}</p>
            </div>
            <div className="justify-content-center ">
              <img src={props.photo} alt="" />
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
              <span>({props.stock} Unidades)</span>
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
                onClick={() =>
                  setOrder(
                    props.productId,
                    props.title,
                    counter,
                    props.price,
                    props.thumb,
                  )
                }
              >
                agregar al carrito
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-lg disabled"
                disabled
              >
                agregar al carrito
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BoxItemDetail;

//TODO: mandar un mensaje cuando agregas un item y volver el contador a 0 de ese item
