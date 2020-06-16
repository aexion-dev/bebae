import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectProducts = createSelector(
  [selectShop],
  shop => shop.products
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections
    ? Object.keys(collections).map(key => collections[key])
    : []
)

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectCollections],
  collections => collections
    ? collections[collectionUrlParam]
    : null
)

export const selectProductsFromCollection = (collectionId) => createSelector(
  [selectProducts],
  products => products
    ? Object.keys(products).map(key => products[key]).filter(product => product.collection === collectionId)
    : null
)

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)
