import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoadingCollections } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionsOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingCollections
});

const CollectionsOverviewContainer =
  connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;
