import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart, fetchProductsStart } from '../redux/shop/shop.actions';
import BackSplash from '../components/back-splash/back-splash';

import Spinner from '../components/spinner/spinner';
import './shop_page.scss';

const CollectionsListPageContainer = lazy(() =>
  import('./collections_list_page.container')
);

const CollectionPageContainer = lazy(() =>
  import('./collection_page.container')
);

const ProductPageContainer = lazy(() =>
  import('./product_page.container')
);

const ShopPage = ({ fetchProductsStart, fetchCollectionsStart, match }) => {
  const [ backgroundWidth, setBackgroundWidth ] = useState(0);

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  useEffect(() => {
    fetchProductsStart();
  }, [fetchProductsStart]);

  const updateBackgroundWidth = (width) => {
    setBackgroundWidth(width);
  }

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} render={() => (<CollectionsListPageContainer updateBackgroundWidth={updateBackgroundWidth} />)} />
        <Route exact path={`${match.path}/:collectionSlug`} render={(props) => (<CollectionPageContainer {...props} updateBackgroundWidth={updateBackgroundWidth} />)} />
        <Route exact path={`${match.path}/:collectionSlug/:productSlug`} component={ProductPageContainer} />
      </Suspense>
      <BackSplash width={backgroundWidth} color="black" />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  fetchProductsStart: () => dispatch(fetchProductsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage);
