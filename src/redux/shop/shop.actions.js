import ShopTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
  type: ShopTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});

export const updateProducts = (productsMap) => ({
  type: ShopTypes.UPDATE_PRODUCTS,
  payload: productsMap
});
