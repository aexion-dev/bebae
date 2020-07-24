import ShopTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  products: null,
  loadingCollections: false,
  loadingProducts: false,
  errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ShopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        loadingCollections: true
      }
    case ShopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        loadingCollections: false,
        collections: action.payload
      }
    case ShopTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        loadingCollections: false,
        errorMessage: action.payload
      }
    case ShopTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        loadingProducts: true,
      }
    case ShopTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loadingProducts: false,
        products: action.payload
      }
    case ShopTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loadingProducts: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;
