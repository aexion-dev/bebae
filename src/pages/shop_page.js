import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  firestore,
  getCollectionsFromSnapshot,
  getProductsFromSnapshot } from '../firebase/firebase.utils';
import CollectionsOverview from '../components/collections-overview/collections-overview';
import WithSpinner from '../components/with-spinner/with-spinner';
import CollectionPage from './collection_page';
import { updateCollections, updateProducts } from '../redux/shop/shop.actions';
import './shop_page.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromCollections = null;
  unsubscribeFromProducts = null;

  async componentDidMount() {
    const { updateCollections, updateProducts } = this.props;
    const collectionsRef = firestore.collection('categories');
    const productsRef = firestore.collection('products');

    try {
      this.unsubscribeFromCollections = await collectionsRef.onSnapshot(async snapshot => {
        const collections = getCollectionsFromSnapshot(snapshot);
        updateCollections(collections);
      });

      this.unsubscribeFromProducts = await productsRef.onSnapshot(async snapshot => {
        const products = getProductsFromSnapshot(snapshot);
        updateProducts(products);
      });

      this.setState({ loading: false });
    } catch (e) {
      console.log('error loading collection/products', e)
    }
  }

  componentWillUnmount() {
    this.unsubscribeFromCollections();
    this.unsubscribeFromProducts();
  }

  render () {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route exact path={`${match.path}/:collectionSlug`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
  updateProducts: productsMap => dispatch(updateProducts(productsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
