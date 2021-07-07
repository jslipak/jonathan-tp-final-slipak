const fetch = require('node-fetch');
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyCzs_ckTS_ONOG0cZQpa0bftafmJCQTEJk',
  authDomain: 'candystore-jls.firebaseapp.com',
  projectId: 'candystore-jls',
  storageBucket: 'candystore-jls.appspot.com',
  messagingSenderId: '411951059473',
  appId: '1:411951059473:web:551466f4db4eaf699717b0',
});

const db = firebase.firestore();

fetch('https://api.mercadolibre.com/sites/MLA/search?q=Bombones')
  .then((data) => data.json())
  .then((data) => {
    const temp = data.results;
    //console.log(temp);
    temp.forEach(function (obj) {
      db.collection('items')
        .add({
          id: obj.id,
          name: obj.title,
          price: obj.price,
          category: 'Bombones',
          stock: obj.available_quantity,
          photo_url: obj.thumbnail,
          thumb: obj.thumbnail,
          description:
            'Ipsum velit voluptate explicabo libero quod nisi Dignissimos provident mollitia dicta laboriosam adipisci Facilis eveniet quidem vel animi qui ut. Explicabo nihil dignissimos magni excepturi distinctio laborum? Perferendis officia magnam?',
        })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function (error) {
          console.error('Error adding document: ', error);
        });
    });
  });
