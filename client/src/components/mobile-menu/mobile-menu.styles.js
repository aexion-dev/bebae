import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const MobileLogoContainer = styled(Link)`
  position: absolute;
  top: 1.25rem;
  left: 1.5rem;

  .logo {
    width: 80px;
    height: auto;
    display: block;
    position: relative;
    overflow: hidden;
  }

  @media screen and (min-width:768px) {
    top: 45px;
    left: 50px;
    .logo { width: 96px }
  }
`;

export const MobileNavContainer = styled.div`
  height: 100%;
  position: relative;
  top: auto;
  left: auto;
  margin: 0;
  padding: 110px 10%;
  width: auto;

  @media screen and (min-width:768px) {
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const MobileNavMenu = styled.div`
  padding: 0;
  letter-spacing: -.4em;
  text-align: left;
  line-height: 1;
  max-width: 270px;
  width: 100%;
`;

export const MobileNavLink = styled(NavLink)`
  display: flex;
  font-family: Engravers Gothic;
  font-weight: normal;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 2px;
  cursor: pointer;
  margin: 0 0 15px;

  @media screen and (min-width:768px) {
    font-size: 22px;
    margin: 0 0 18px;
  }

  &.active {

  }
`;
