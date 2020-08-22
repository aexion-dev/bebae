import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as AccountIconSVG } from '../../assets/user-avatar.svg';

export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width:800px) {

  }
`;

export const LogoContainer = styled(Link)`
  width: 110px;

  @media screen and (max-width:800px) {
    width: 50px;
    padding: 0;
  }
`;

export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width:800px) {
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  font-family: Engravers Gothic;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 0px 15px;
  cursor: pointer;

  &.active {
    
  }
`;

export const AccountIcon = styled(AccountIconSVG)`
  width: 20px;
  height: 20px;
  margin-left: 30px;
`
