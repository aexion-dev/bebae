import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoadingProducts } from '../redux/shop/shop.selectors';
import WithSpinner from '../components/with-spinner/with-spinner';
import ProductPage from './product_page';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingProducts
})

const ProductPageContainer =
  connect(mapStateToProps)(WithSpinner(ProductPage));

export default ProductPageContainer;
