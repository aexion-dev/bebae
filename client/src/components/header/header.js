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
  HeaderBar,
  LogoContainer,
  Logo,
  NavContainer,
  NavMenu,
  StyledNavLink,
  AccountIcon
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
  const { showBackground } = useContext(ThemeContext);

  return (
    <HeaderContainer $showBackground={showBackground}>
      <HeaderBar>
        <LogoContainer to='/'>
          <Logo $showBackground={showBackground} />
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
            <StyledNavLink as='div' onClick={signOutStart}><AccountIcon $showBackground={showBackground}/></StyledNavLink>
            :
            <StyledNavLink to='/signin'><AccountIcon $showBackground={showBackground}/></StyledNavLink>
          }
          <CartIcon />
          <MobileMenu />
        </NavContainer>
        <CartDropdown />
      </HeaderBar>
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
