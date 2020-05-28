import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  NavLink
} from './header.styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <NavContainer>
      <NavLink to='/shop'>
        SHOP
      </NavLink>
      <NavLink to='/shop'>
        LOOKBOOK
      </NavLink>
      <NavLink to='/shop'>
        CONTACT
      </NavLink>
      {
        currentUser ?
        <NavLink as='div' onClick={() => auth.signOut()}>SIGN OUT</NavLink>
        :
        <NavLink to='/signin'>SIGN IN</NavLink>
      }
      <CartIcon />
    </NavContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
