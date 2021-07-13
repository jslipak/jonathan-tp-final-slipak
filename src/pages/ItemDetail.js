import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import BoxItemDetail from '../components/BoxItemDetail';
import './ItemDetail.css';
import { getOneId } from '../firebase';

function ItemDetail() {
  const [data, setData] = useState(null);
  const params = useParams();
  const item_id = params.product_id;

  useEffect(() => {
    getOneId(item_id, 'items')
      .then((temp) => {
        setData(temp[0]);
      })
      .catch((err) => console.error(err));
  }, [item_id]);

  return (
    <>
      {data ? (
        <BoxItemDetail
          title={data.name}
          text={data.description}
          productId={data.id}
          price={data.price}
          stock={data.stock}
          photo={data.photo_url}
          thumb={data.thumb}
          category={data.category}
        />
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </>
  );
}

export default ItemDetail;
