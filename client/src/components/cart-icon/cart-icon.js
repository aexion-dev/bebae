import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ThemeContext } from '../../contexts/ThemeContext';
import {
  CartIconContainer,
  ShoppingIcon,
  CartIconCount
} from './cart-icon.styles';


const CartIcon = ({ toggleCartHidden, itemCount }) => {
  const { showBackground, currentPageTheme } = useContext(ThemeContext);

  return (
    <CartIconContainer onClick={toggleCartHidden} $showBackground={showBackground} $currentPageTheme={currentPageTheme} >
      <ShoppingIcon $showBackground={showBackground} $currentPageTheme={currentPageTheme} />
      <CartIconCount>{itemCount}</CartIconCount>
    </CartIconContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
