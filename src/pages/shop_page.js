import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../components/collections-overview/collections-overview.container';
import CollectionPageContainer from './collection_page.container';
import { fetchCollectionsStart, fetchProductsStart } from '../redux/shop/shop.actions';
import './shop_page.scss';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchProductsStart, fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
    fetchProductsStart();
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  fetchProductsStart: () => dispatch(fetchProductsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage);
