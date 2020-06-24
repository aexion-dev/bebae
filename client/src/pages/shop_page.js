import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart, fetchProductsStart } from '../redux/shop/shop.actions';

import Spinner from '../components/spinner/spinner';
import './shop_page.scss';

const CollectionsOverviewContainer = lazy(() =>
  import('../components/collections-overview/collections-overview.container')
);

const CollectionPageContainer = lazy(() =>
  import('./collection_page.container')
);

const ShopPage = ({ fetchProductsStart, fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  useEffect(() => {
    fetchProductsStart();
  }, [fetchProductsStart]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route exact path={`${match.path}/:collectionSlug`} component={CollectionPageContainer} />
      </Suspense>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  fetchProductsStart: () => dispatch(fetchProductsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage);
