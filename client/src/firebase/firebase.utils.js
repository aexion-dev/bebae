import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DB_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGE_SENDERID,
  appId: process.env.REACT_APP_FB_APP_ID
}

export const createUserProfile = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const joined = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        joined,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export const getGuestCartRef = async (cartId) => {
  const guestCart = firestore.doc(`carts/${cartId}`);
  const snapShot = await guestCart.get();

  if(snapShot.exists) {
    return guestCart;
  } else {
    return null;
  }
}

export const getUserCartRef = async (userId) => {
  const userCart = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await userCart.get();
  if(!snapShot.empty) {
    return snapShot.docs[0].ref;
  } else {
    return null;
  }
}

export const updateCartInFirebase = async (cart, userId) => {
  const { cartId, cartItems } = cart;
  const userCart = firestore.doc(`carts/${cartId}`);
  const snapShot = await userCart.get();

  if(!snapShot.exists) {
    const newCart = firestore.collection('carts').doc();
    const created = new Date();
    try {
      await newCart.set({
        userId,
        created,
        cartItems
      })
      return newCart.id;
    } catch(error) {
      console.log('error creating cart in database', error.message)
    }
  } else {
    try {
      userCart.update({ cartItems, userId });
      return cartId;
    } catch(error) {
      console.log('error updating cart in database', error.message);
    }
  }
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
}

export const getCollectionsFromSnapshot = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map(doc => {
    const { name, imageUrl, slug, id } = doc.data();

    return {
      name,
      id,
      imageUrl,
      routeName: encodeURI(slug.toLowerCase())
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.name.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const getProductsFromSnapshot = (productsSnapshot) => {
  const transformedProducts = productsSnapshot.docs.map(doc => {
    const { name, id, price, imageUrl, collection, slug } = doc.data();

    return {
      name,
      id,
      price,
      imageUrl,
      collection,
      routeName: encodeURI(slug.toLowerCase())
    }
  });

  return transformedProducts.reduce((accumulator, product) => {
    accumulator[product.name.toLowerCase()] = product;
    return accumulator;
  }, {})
}

export const addCollection = async (collection) => {
  const collectionRef = firestore.collection('categories').doc();

  try {
    await collectionRef.set({id: collectionRef.id, ...collection});
  } catch(error) {
    console.log('error creating collection', error.message);
  }
}

export const addProduct = async (product) => {
  const productRef = firestore.collection('products').doc();

  try {
    await productRef.set({id: productRef.id, ...product});
  } catch(error) {
    console.log('error creating product', error.message);
  }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
