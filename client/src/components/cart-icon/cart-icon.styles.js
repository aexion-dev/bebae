import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 31px;
  height: 45px;
  margin: 0px 10px;
  margin-right: ${props => props.$showBackground ? "40px" : "10px"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  @media screen and (min-width:768px) {
    margin: 0px 15px;
    margin-right: ${props => props.$showBackground ? "80px" : "10px"};
  }

  @media screen and (min-width:1024px) {
    margin-right: 0;
  }
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 20px;
  height: 20px;
  fill: #000000;

  @media screen and (max-width: 1024px) {
    fill: ${props => props.$showBackground ? "#FFFFFF" : "#000000"};
  }
`

export const CartIconCount = styled.span`
  position: absolute;
  display: inline-block;
  height: 20px;
  width: 20px;
  line-height: 20px;
  border-radius: 50%;
  background: #8a8a8a;
  color: white;
  font-size: 11px;
  text-align: center;
  top: 5px;
  right: 0;
`;
