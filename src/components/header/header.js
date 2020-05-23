import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => (
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
    </div>
  </div>
)

export default Header;
