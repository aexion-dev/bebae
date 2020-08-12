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
    ? Object.keys(collections).map(key => collections[key]).filter(collection => collection.slug === collectionUrlParam)
    : null
)

export const selectProduct = (productUrlParam) => createSelector(
  [selectProducts],
  products => products
    ? Object.keys(products).map(key => products[key]).filter(product => product.slug === productUrlParam)
    : null
)

export const selectProductsFromCollection = (collectionId) => createSelector(
  [selectProducts],
  products => products
    ? Object.keys(products).map(key => products[key]).filter(product => product.collection === collectionId)
    : null
)

export const selectIsLoadingCollections = createSelector(
  [selectShop],
  shop => shop.loadingCollections
)

export const selectIsLoadingProducts = createSelector(
  [selectShop],
  shop => shop.loadingProducts
)
