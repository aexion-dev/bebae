import React from 'react';
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
  CartItemName,
  CartItemPrice
} from './cart-item.styles';


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <CartItemDetailsContainer>
      <CartItemName>{name}</CartItemName>
      <CartItemPrice>{quantity} x ${price}</CartItemPrice>
    </CartItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem;
