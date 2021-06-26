import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import BoxItemDetail from '../components/BoxItemDetail';
import './ItemDetail.css';

function ItemDetail() {
  const [data, setData] = useState(null);
  const item_id = useParams();
  const filter_id = item_id.product_id;
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jslipak.github.io/data/chocolate.json')
        .then((response) => response.json())
        .then((data) => {
          const findData = data.find((element) => element.id === filter_id);
          setData(findData);
        })
        .catch((err) => console.log('catch:', err));
    }, 2000);
    console.log('Change Counter State');
  }, []);

  return (
    <>
      {data ? (
        <BoxItemDetail
          title={data.name}
          text={data.description}
          productId={data.id}
          price={data.precio}
          stock={data.stock}
          photo={data.photo_url}
          thumb={data.thumb}
        />
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </>
  );
}

export default ItemDetail;
