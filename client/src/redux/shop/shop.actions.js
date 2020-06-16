import ShopTypes from './shop.types';
import {
  firestore,
  getCollectionsFromSnapshot,
  getProductsFromSnapshot } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionsRef = firestore.collection('categories');
    dispatch(fetchCollectionsStart());

    collectionsRef.get().then(snapshot => {
      const collections = getCollectionsFromSnapshot(snapshot);
      dispatch(fetchCollectionsSuccess(collections))
      //updateCollections(collections);
      //this.setState({ loading: false });
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}

export const fetchProductsStart = () => ({
  type: ShopTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (products) => ({
  type: ShopTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products
})

export const fetchProductsFailure = (errorMessage) => ({
  type: ShopTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage
})

export const fetchProductsStartAsync = () => {
  return dispatch => {
    const productsRef = firestore.collection('products');
    dispatch(fetchProductsStart());

    productsRef.get().then(snapshot => {
      const products = getProductsFromSnapshot(snapshot);
      dispatch(fetchProductsSuccess(products))
      //updateCollections(collections);
      //this.setState({ loading: false });
    }).catch(error => dispatch(fetchProductsFailure(error.message)))
  }
}
