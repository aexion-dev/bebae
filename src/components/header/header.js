import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import './header.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
