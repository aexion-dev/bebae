import React from 'react';
import Menu from 'react-burger-menu/lib/menus/slide';
import { ReactComponent as MobileLogo } from '../../assets/logo.svg';
import {
  MobileLogoContainer,
  MobileNavContainer,
  MobileNavMenu,
  MobileNavLink
} from './mobile-menu.styles';
import './mobile-menu.scss';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
        <Menu
          right
          disableAutoFocus
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
          <MobileLogoContainer to='/'>
            <MobileLogo className='logo' fill={"#FFFFFF"} />
          </MobileLogoContainer>
          <MobileNavContainer>
            <MobileNavMenu>
              <MobileNavLink to='/shop' onClick={() => this.closeMenu()}>
                SHOP
              </MobileNavLink>
              <MobileNavLink to='/lookbook' onClick={() => this.closeMenu()}>
                LOOKBOOK
              </MobileNavLink>
              <MobileNavLink to='/news' onClick={() => this.closeMenu()}>
                NEWS
              </MobileNavLink>
              <MobileNavLink to='/account' onClick={() => this.closeMenu()}>
                ACCOUNT
              </MobileNavLink>
              <MobileNavLink to='/contact' onClick={() => this.closeMenu()}>
                CONTACT
              </MobileNavLink>
            </MobileNavMenu>
          </MobileNavContainer>
        </Menu>
    )
  }
}

export default MobileMenu;
