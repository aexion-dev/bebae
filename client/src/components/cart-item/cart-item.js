import React from 'react';
import { formatPrice } from '../../utils/price';
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
  CartItemTopInfo,
  CartItemName,
  CartItemSize,
  CartItemBottomInfo,
  CartItemQuantity,
  CartItemPrice
} from './cart-item.styles';


const CartItem = ({ item: { imageUrl, price, name, quantity, size } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <CartItemDetailsContainer>
      <CartItemTopInfo>
        <CartItemName>{name}</CartItemName>
        <CartItemSize>Size: {size}</CartItemSize>
      </CartItemTopInfo>
      <CartItemBottomInfo>
        <CartItemQuantity>QTY: {quantity}</CartItemQuantity>
        <CartItemPrice>{formatPrice(price)}</CartItemPrice>
      </CartItemBottomInfo>
    </CartItemDetailsContainer>
  </CartItemContainer>
)

export default React.memo(CartItem);
