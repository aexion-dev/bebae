import React from 'react';
import ProductLabel from '../product-label/product-label';
import ProductOptions from '../product-options/product-options';
import './product-details.scss';

const ProductDetails = ({ product, collectionName }) => {
  const { name, price } = product;

  return (
    <div className="product-details">
      <ProductLabel text={collectionName} />
      <h1 className="product-name">{name}</h1>
      <p className="product-desc">Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed eu tellus ex. Etiam vel tincidunt libero.
        Phasellus vel faucibus arcu, vitae liquam leo. Nunc urna quam,
        ultrices vitae arcu sit amet, egestas tincidunt nisl. Vivamus neque
        justo, gravida sit amet arcu non, vehicula fringilla ipsum. Proin
        eget tincidunt ante, ac mollis tellus. </p>
      <ProductOptions product={product} />
    </div>
  )
};

export default ProductDetails;
