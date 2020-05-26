import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import './header.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='nav'>
      <Link className='nav-link' to='/shop'>
        SHOP
      </Link>
      <Link className='nav-link' to='/shop'>
        LOOKBOOK
      </Link>
      <Link className='nav-link' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='nav-link' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='nav-link' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
