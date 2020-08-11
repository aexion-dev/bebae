import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoadingCollections } from '../redux/shop/shop.selectors';
import WithSpinner from '../components/with-spinner/with-spinner';
import CollectionsListPage from './collections_list_page';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingCollections
});

const CollectionsListPageContainer =
  connect(mapStateToProps)(WithSpinner(CollectionsListPage));

export default CollectionsListPageContainer;
