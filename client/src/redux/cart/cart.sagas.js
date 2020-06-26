import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { getUserCartRef, getGuestCartRef, updateCartInFirebase } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import { clearCart, setCart } from './cart.actions';
import { selectCartId, selectCart } from './cart.selectors';
import CartActionTypes from './cart.types';
import UserActionTypes from '../user/user.types';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCart() {
  const currentUser = yield select(selectCurrentUser);
  const cart = yield select(selectCart);
  let newCartId = null;

  if (currentUser) {
    newCartId = yield updateCartInFirebase(cart, currentUser.id);
  } else {
    newCartId = yield updateCartInFirebase(cart, null);
  }

  if(!cart.cartId) {
    yield put(setCart({
      cartId: newCartId,
      cartItems: cart.cartItems
    }));
  }
}

export function* getCartFromFirebase() {
  let cartRef = null;
  const currentUser = yield select(selectCurrentUser);
  const cartId = yield select(selectCartId);

  if (currentUser) {
    cartRef = yield getUserCartRef(currentUser.id);
  } else {
    cartRef = yield getGuestCartRef(cartId);
  }

  if(cartRef) {
    const snapShot = yield cartRef.get();
    yield put(setCart({
      cartId: snapShot.id,
      cartItems: snapShot.data().cartItems
    }));
  } else {
    console.log('Cart Not Found!');
  }
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignInSuccess() {
  yield takeLatest(
    [
      UserActionTypes.CHECK_USER_SESSION,
      UserActionTypes.SIGN_IN_SUCCESS
    ],
    getCartFromFirebase
  );
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART
    ],
    updateCart
  );
}

export function* cartSagas() {
  yield(all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onCartChange)
  ]));
}
