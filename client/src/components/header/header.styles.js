import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as AccountIconSVG } from '../../assets/user-avatar.svg';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';

export const HeaderContainer = styled.div`
  padding: 35px 75px;

  @media screen and (max-width: 1024px) {
    padding-right: 35px;
  }

  @media screen and (max-width: 768px) {
    padding: .75rem 1.5rem
  }
`;

export const HeaderBar = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled(Link)`
  width: 96px;

  @media screen and (min-width:768px) {
    width: 110px;
  }
`;

export const Logo = styled(LogoSVG)`
  vertical-align: middle;
  fill: ${props => props.$showBackground ? "#FFFFFF" : "#000000"};
`

export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavMenu = styled.div`
  display: none;

  @media screen and (min-width:1024px) {
    display: flex;
    margin-right: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  font-family: Engravers Gothic;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 0px 10px;
  cursor: pointer;

  @media screen and (min-width:768px) {
    padding: 0px 15px;
  }

  &.active {

  }
`;

export const AccountIcon = styled(AccountIconSVG)`
  width: 20px;
  height: 20px;
  fill: #000000;

  @media screen and (max-width: 1024px) {
    ${props => props.$currentPageTheme === 'collection-list' && `
        fill: #FFFFFF;
    `}
  }
`
