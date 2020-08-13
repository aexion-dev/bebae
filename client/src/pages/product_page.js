import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectProduct, selectCollection} from '../redux/shop/shop.selectors';
import ProductImage from '../components/product-image/product-image';
import ProductDetails from '../components/product-details/product-details';
import './product_page.scss';

const ProductPage = ({ product, collection, updateBackgroundWidth }) => {
  useEffect(() => {
    updateBackgroundWidth('calc(75px + (100vw - 150px) * 0.25)');
  }, []);

  if(!product || product.length > 1 || !collection || collection.length > 1)
    return null;

  return (
    <div className="product-page">
      <ProductImage images={product[0].images} />
      <ProductDetails product={product[0]} collectionName={collection[0].name}/>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.productSlug)(state),
  collection: selectCollection(ownProps.match.params.collectionSlug)(state)
})

export default connect(mapStateToProps)(ProductPage);
