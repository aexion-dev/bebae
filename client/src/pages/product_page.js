import React from 'react';
import { connect } from 'react-redux';
import { selectProduct, selectCollection} from '../redux/shop/shop.selectors';
import ProductImage from '../components/product-image/product-image';
import ProductDetails from '../components/product-details/product-details';
import './product_page.scss';

const ProductPage = ({ product, collection }) => {
  if(!product || product.length > 1 || !collection || collection.length > 1)
    return null;

  const { imageUrl } = product[0];

  //Need to convert database imageURL to array of images
  let images = [];
  images.push({
    id: 0,
    view: 'Front',
    url: imageUrl
  });

  return (
    <div className="product-page">
      <ProductImage images={images} />
      <ProductDetails product={product[0]} collectionName={collection.name}/>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.productSlug)(state),
  collection: selectCollection(ownProps.match.params.collectionSlug)(state)
})

export default connect(mapStateToProps)(ProductPage);
