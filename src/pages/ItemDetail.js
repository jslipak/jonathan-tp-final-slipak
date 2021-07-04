import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import BoxItemDetail from '../components/BoxItemDetail';
import './ItemDetail.css';
import { getFirestore } from '../firebase';

function ItemDetail() {
  const [data, setData] = useState(null);
  const params = useParams();
  const item_id = params.product_id;
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    const oneItem = itemCollection.where('id', '==', item_id);
    oneItem.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('no resultado');
        setData([]);
      } else {
        const temp = querySnapshot.docs.map((doc) => doc.data());
        setData(temp[0]);
      }
    });
    console.log(data);
    console.log('Change Counter State');
  }, []);

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
