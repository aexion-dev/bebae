import React from 'react';
import './product-label.scss';

const ProductLabel = ({ text }) => (
  <span className="product-label">
    <h2 className="product-label-text">{text}</h2>
  </span>
);

export default ProductLabel;
