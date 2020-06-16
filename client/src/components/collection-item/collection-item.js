import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  ItemImage,
  ItemTitle,
  ItemName,
  ItemPrice,
  ItemButton
} from './collection-item.styles';

const CollectionItem = ({item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
  <CollectionItemContainer>
    <ItemImage className='image' imageUrl={imageUrl} />
    <ItemTitle>
      <ItemName>{ name }</ItemName>
      <ItemPrice>{ price }</ItemPrice>
    </ItemTitle>
    <ItemButton inverted onClick={() => addItem(item)}>ADD TO CART</ItemButton>
  </CollectionItemContainer>
)}

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
