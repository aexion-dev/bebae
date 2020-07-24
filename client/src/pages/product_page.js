import React from 'react';
import { connect } from 'react-redux';
import { selectProduct, selectCollection} from '../redux/shop/shop.selectors';
import ProductImage from '../components/product-image/product-image';
import CustomButton from '../components/custom-button/custom-button';
import './product_page.scss';

const ProductPage = ({ product, collection }) => {
  if(!product || product.length > 1 || !collection || collection.length > 1)
    return null;

  const { name, price, imageUrl } = product[0];

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
      <div className="product-details">
        <span className="box-label">
          <h2 className="box-label-text">{collection.name}</h2>
        </span>
        <h1 className="product-name">{name}</h1>
        <p className="product-desc">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed eu tellus ex. Etiam vel tincidunt libero.
          Phasellus vel faucibus arcu, vitae liquam leo. Nunc urna quam,
          ultrices vitae arcu sit amet, egestas tincidunt nisl. Vivamus neque
          justo, gravida sit amet arcu non, vehicula fringilla ipsum. Proin
          eget tincidunt ante, ac mollis tellus. </p>
        <form className='product-options'>
          <label className="group-label" htmlFor="size-selector">SIZE:</label>
          <input type="radio" name="size-selector" value="S" defaultChecked/>
          <label className="option-label">S</label>
          <input type="radio" name="size-selector" value="M"/>
          <label className="option-label">M</label>
          <input type="radio" name="size-selector" value="L"/>
          <label className="option-label">L</label>
          <input type="radio" name="size-selector" value="XL"/>
          <label className="option-label">XL</label>
          <input type="radio" name="size-selector" value="XXL"/>
          <label className="option-label">XXL</label>
        </form>
        <CustomButton>Add To Cart</CustomButton>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.productSlug)(state),
  collection: selectCollection(ownProps.match.params.collectionSlug)(state)
})

export default connect(mapStateToProps)(ProductPage);
