import React from 'react';
import { formatPrice } from '../../utils/price';
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
      <CartItemPrice>{quantity} x {formatPrice(price)}</CartItemPrice>
    </CartItemDetailsContainer>
  </CartItemContainer>
)

export default React.memo(CartItem);
