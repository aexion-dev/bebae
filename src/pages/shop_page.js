import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../components/collections-overview/collections-overview';
import WithSpinner from '../components/with-spinner/with-spinner';
import CollectionPage from './collection_page';
import { fetchCollectionsStartAsync, fetchProductsStartAsync } from '../redux/shop/shop.actions';
import { selectIsCollectionsFetching } from '../redux/shop/shop.selectors';
import './shop_page.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchProductsStartAsync, fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    fetchProductsStartAsync();
  }

  render () {
    const { match, isCollectionsFetching } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />} />
        <Route exact path={`${match.path}/:collectionSlug`} render={(props) => <CollectionPageWithSpinner isLoading={isCollectionsFetching} {...props} />} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
