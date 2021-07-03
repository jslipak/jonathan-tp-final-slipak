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

const chocolates = [
  {
    id: '1',
    category: 'Chocolates',
    name: 'Bizniken',
    description: 'Rico choclate',
    precio: '100',
    stock: '1000',
    photo_url: 'http://via.placeholder.com/300px300px',
    thumb: 'http://via.placeholder.com/80px80px',
  },
  {
    id: '2',
    category: 'Galletitas',
    name: 'Opera',
    description: 'Rico choclate',
    precio: '100',
    stock: '1000',
    photo_url: 'http://via.placeholder.com/300px300px',
    thumb: 'http://via.placeholder.com/80px80px',
  },
  {
    id: '3',
    category: 'Caramelos',
    name: 'Sugus',
    description: 'Rico choclate',
    precio: '100',
    stock: '1000',
    photo_url: 'http://via.placeholder.com/300px300px',
    thumb: 'http://via.placeholder.com/80px80px',
  },
  {
    id: '4',
    category: 'Chicles',
    name: 'Bubalu',
    description: 'Rico choclate',
    precio: '100',
    stock: '1000',
    photo_url: 'http://via.placeholder.com/300px300px',
    thumb: 'http://via.placeholder.com/80px80px',
  },
  {
    id: '5',
    category: 'Alfajores',
    name: 'Havanna',
    description: 'Rico choclate',
    precio: '100',
    stock: '1000',
    photo_url: 'http://via.placeholder.com/300px300px',
    thumb: 'http://via.placeholder.com/80px80px',
  },
  {
    id: '6',
    category: 'Alfajores',
    name: 'Jorgito',
    description: 'Rico choclate',
    precio: '100',
    stock: '1000',
    photo_url: 'http://via.placeholder.com/300px300px',
    thumb: 'http://via.placeholder.com/80px80px',
  },
  {
    id: '7',
    category: 'Alfajores',
    name: 'Fantoche',
    description: 'Rico choclate',
    precio: '100',
    stock: '1000',
    photo_url: 'http://via.placeholder.com/300px300px',
    thumb: 'http://via.placeholder.com/80px80px',
  },
  {
    id: '8',
    category: 'Alfajores',
    name: 'Capitan',
    description: 'Rico choclate',
    precio: '100',
    stock: '1000',
    photo_url: 'http://via.placeholder.com/300px300px',
    thumb: 'http://via.placeholder.com/80px80px',
  },
  {
    id: '9',
    category: 'Alfajores',
    name: 'Gualmayen',
    description: 'Rico choclate',
    precio: '100',
    stock: '1000',
    photo_url: 'http://via.placeholder.com/300px300px',
    thumb: 'http://via.placeholder.com/80px80px',
  },
  {
    id: '10',
    category: 'Alfajores',
    name: 'Shot',
    description: 'Rico choclate',
    precio: '100',
    stock: '1000',
    photo_url: 'http://via.placeholder.com/300px300px',
    thumb: 'http://via.placeholder.com/80px80px',
  },
];

chocolates.forEach(function (obj) {
  db.collection('items')
    .add({
      id: obj.id,
      name: obj.name,
      description: obj.description,
      price: obj.precio,
      category: obj.category,
      stock: obj.stock,
      photo_url: obj.photo_url,
      thumb: obj.thumb,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
