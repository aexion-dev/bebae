import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../components/collections-overview/collections-overview.container';
import CollectionPageContainer from './collection_page.container';
import { fetchCollectionsStartAsync, fetchProductsStartAsync } from '../redux/shop/shop.actions';
import './shop_page.scss';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchProductsStartAsync, fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    fetchProductsStartAsync();
  }

  render () {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route exact path={`${match.path}/:collectionSlug`} component={CollectionPageContainer} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
})

export default connect(null, mapDispatchToProps)(ShopPage);
