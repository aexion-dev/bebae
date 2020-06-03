import ShopTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  products: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ShopTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    case ShopTypes.UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;
