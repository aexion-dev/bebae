import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartHidden, selectCartTotal } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { formatPrice } from '../../utils/price';
import CartItem from '../cart-item/cart-item';
import {
  CartDropdownContainer,
  CartDropdownHeader,
  CartDropdownTitle,
  CartDropdownCloseButton,
  CartItemsContainer,
  CartEmptyMessage,
  CartDropdownFooter,
  CartDropdownTotalContainer,
  CartDropdownTotalLabel,
  CartDropdownTotal,
  CartDropdownButton
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, total, hidden, history, dispatch }) => (
  <CartDropdownContainer hidden={hidden}>
    <CartDropdownHeader>
      <CartDropdownTitle>Shopping Cart</CartDropdownTitle>
      <CartDropdownCloseButton onClick={() => dispatch(toggleCartHidden())}>&#10005;</CartDropdownCloseButton>
    </CartDropdownHeader>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <CartEmptyMessage>Your cart is empty</CartEmptyMessage>
      )}
    </CartItemsContainer>
    <CartDropdownFooter>
      <CartDropdownTotalContainer>
        <CartDropdownTotalLabel>Subtotal</CartDropdownTotalLabel>
        <CartDropdownTotal>{formatPrice(total)}</CartDropdownTotal>
      </CartDropdownTotalContainer>
      <CartDropdownButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>Checkout</CartDropdownButton>
    </CartDropdownFooter>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden,
  total: selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
