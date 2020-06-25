import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { getUserCartRef, getGuestCartRef } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import { clearCart, setCart } from './cart.actions';
import { selectCartItems, selectCartId } from './cart.selectors';
import CartActionTypes from './cart.types';
import UserActionTypes from '../user/user.types';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  let cartRef = null;
  const currentUser = yield select(selectCurrentUser);
  const cartId = yield select(selectCartId);

  if (currentUser) {
    cartRef = yield getUserCartRef(currentUser.id);
  } else {
    cartRef = yield getGuestCartRef(cartId);
  }

  try {
    const cartItems = yield select(selectCartItems);
    yield cartRef.update({ cartItems });
  } catch(error) {
    console.log('error saving shopping cart', error.message);
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

  const snapShot = yield cartRef.get();
  yield put(setCart({
    cartId: snapShot.id,
    cartItems: snapShot.data().cartItems
  }));
}

// export function* getCartFromFirebase({ payload: user }) {
//   const cartRef = yield getUserCartRef(user.id);
//   const snapShot = yield cartRef.get();
//   yield put(setCart(snapShot.data().cartItems));
// }

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
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield(all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onCartChange)
  ]));
}
