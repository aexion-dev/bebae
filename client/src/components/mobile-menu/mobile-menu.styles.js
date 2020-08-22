import styled from 'styled-components';
import { ReactComponent as MenuIconSVG } from '../../assets/menu-icon.svg';

export const MenuIconContainer = styled.div`
  display: flex;
  padding-left: 10px;

  @media screen and (min-width:768px) {
    padding-left: 15px;
  }

  @media screen and (min-width:1024px) {
    display: none;
  }
`

export const MenuIcon = styled(MenuIconSVG)`
  width: 20px;
  height: 20px;
  margin-top: 2px;
  cursor: pointer;
`
