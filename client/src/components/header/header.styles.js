import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width:800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 110px;
  padding: 20px 0px;

  @media screen and (max-width:800px) {
    width: 50px;
    padding: 0;
  }
`;

export const NavContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width:800px) {
    width: 80%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  font-family: Engravers Gothic;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 25px 15px;
  cursor: pointer;

  &.active {
    color: #a22d2d;
  }
`;
