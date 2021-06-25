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
    console.log(filter_id);
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
          title={data.description}
          text={data.name}
          productId={data.id}
        />
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </>
  );
}

export default ItemDetail;
