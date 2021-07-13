import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCzs_ckTS_ONOG0cZQpa0bftafmJCQTEJk',
  authDomain: 'candystore-jls.firebaseapp.com',
  projectId: 'candystore-jls',
  storageBucket: 'candystore-jls.appspot.com',
  messagingSenderId: '411951059473',
  appId: '1:411951059473:web:551466f4db4eaf699717b0',
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}

export function addItemFirebase(order) {
  const db = getFirestore();
  const pushOrder = db.collection('orders');
  const tempId = pushOrder
    .add({ items: order })
    .then(({ id }) => {
      return id;
    })
    .catch((err) => console.log(err));
  return tempId;
}

export async function getOneId(id, collection) {
  const db = getFirestore();
  const itemCollection = db.collection(collection);
  const Item = itemCollection.where('id', '==', id);
  return Item.get().then((querySnapshot) => {
    if (querySnapshot.size === 0) {
      return ['test', 'no anda'];
    } else {
      console.log(querySnapshot.docs.map((doc) => doc.data()));
      return querySnapshot.docs.map((doc) => doc.data());
    }
  });
}
