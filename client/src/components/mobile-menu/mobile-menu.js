import React from 'react';
import Menu from 'react-burger-menu/lib/menus/slide';
import './mobile-menu.scss';

const MobileMenu = () => {

  return (
      <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
  );
}

export default MobileMenu;
