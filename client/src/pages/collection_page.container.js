import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching } from '../redux/shop/shop.selectors';
import WithSpinner from '../components/with-spinner/with-spinner';
import CollectionPage from './collection_page';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
})

const CollectionsPageContainer =
  connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionsPageContainer;
