import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import MobileMenu from '../mobile-menu/mobile-menu';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { ThemeContext } from '../../contexts/ThemeContext';

import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  NavMenu,
  StyledNavLink,
  AccountIcon
} from './header.styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser, hidden, signOutStart }) => {
  const { showBackground } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' fill={showBackground ? "#FFFFFF" : "#000000"} />
      </LogoContainer>
      <NavContainer>
        <NavMenu>
          <StyledNavLink to='/shop'>
            SHOP
          </StyledNavLink>
          <StyledNavLink to='/lookbook'>
            LOOKBOOK
          </StyledNavLink>
          <StyledNavLink to='/news'>
            NEWS
          </StyledNavLink>
          <StyledNavLink to='/contact'>
            CONTACT
          </StyledNavLink>
        </NavMenu>
        {
          currentUser ?
          <StyledNavLink as='div' onClick={signOutStart}><AccountIcon /></StyledNavLink>
          :
          <StyledNavLink to='/signin'><AccountIcon /></StyledNavLink>
        }
        <CartIcon />
        <MobileMenu />
      </NavContainer>
      <CartDropdown />
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
