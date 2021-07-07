import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardDeck, Spinner } from 'react-bootstrap';
import CardItem from './CardItem.js';
import './Categories.css';
import { getFirestore } from '../firebase';

function Categories() {
  const [data, setData] = useState();
  const params = useParams();
  useEffect(() => {
    const category = params.category_id; // Esto seria el name de la DB
    const db = getFirestore();
    const CatCollection = db.collection('items');
    const CategoryItems = CatCollection.where('category', '==', category);
    CategoryItems.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('no resultado');
        setData([]);
      } else {
        const temp = querySnapshot.docs.map((doc) => doc.data());
        setData(temp);
      }
    });
  }, [params]);
  return (
    <CardDeck className="d-flex justify-content-around">
      {data ? (
        data.map((item) => {
          return (
            <CardItem
              key={item.id}
              title={item.name}
              text={item.description}
              productId={item.id}
              price={item.price}
              stock={item.stock}
              photo={item.photo_url}
              thumb={item.thumb}
              category={item.category}
            />
          );
        })
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </CardDeck>
  );
}

export default Categories;
