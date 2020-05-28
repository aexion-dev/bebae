import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`

export const CartIconCount = styled.span`
  position: absolute;
  display: inline-block;
  height: 20px;
  width: 20px;
  line-height: 20px;
  border-radius: 50%;
  background: #a22d2d;
  color: white;
  font-size: 11px;
  text-align: center;
  top: 5px;
  right: 0;
`;