import React from 'react';
import { connect } from 'react-redux';
import { selectProductsFromCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item';
import './collection-preview.scss';

const CollectionPreview = ({ name, products, limit, history, match}) => {
  if(!products || products.length < 1)
    return null;

  return (
    <div className='collection-preview'>
      <h1 className='title'>{name}</h1>
      <div className='preview'>
        {
          products
          ?  products.filter((item, idx, history, match) => idx < limit || limit === -1)
              .map((item, idx, history, match) => (
                <CollectionItem key={idx} item={item} history match />
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
