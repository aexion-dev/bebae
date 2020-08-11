import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  firestore,
  getCollectionsFromSnapshot,
  getProductsFromSnapshot
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchProductsSuccess,
  fetchProductsFailure
} from './shop.actions';
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection('collections');
    const snapshot = yield collectionsRef.get();
    const collections = yield call(getCollectionsFromSnapshot, snapshot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* fetchProductsAsync() {
  try {
    const productsRef = firestore.collection('products');
    const snapshot = yield productsRef.get();
    const products = yield call(getProductsFromSnapshot, snapshot);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

export function* fetchProductsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_PRODUCTS_START,
    fetchProductsAsync
  );
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart),
    call(fetchProductsStart)
  ])
}
