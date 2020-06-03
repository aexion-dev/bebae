import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProductsFromCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item';
import './collection-preview.scss';

const CollectionPreview = ({ name, products, limit }) => {
  if(!products || products.length < 1)
    return null;

  return (
    <div className='collection-preview'>
      <h1 className='title'>{name}</h1>
      <div className='preview'>
        {
          products
          ?  products.filter((item, idx) => idx < limit || limit === -1)
              .map((item, idx) => (
                <CollectionItem key={idx} item={item} />
              ))
          : null
        }
      </div>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => ({
  products: selectProductsFromCollection(ownProps.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPreview);
