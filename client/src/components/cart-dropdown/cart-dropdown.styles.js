import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CartDropdownContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 50vh;
  width: 90%;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  border-left: 1px solid #e7e7e7;
  background-color: white;
  z-index: 5;
  overflow: hidden;
  height: ${props => props.hidden ? "0" : "100vh"};
  transform: ${props => props.hidden ? "translateX(100%)" : "translateX(0%)"};
  transition: ${props => props.hidden ? "height 0ms 0.3s, transform 0.3s 0ms" : "height 0ms 0ms, transform 0.3s 0ms;"};
`;

export const CartDropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
`

export const CartDropdownTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: Engravers Gothic;
  font-weight: bold;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const CartDropdownCloseButton = styled.span`
  cursor: pointer;
  font-size: 18px;
`

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none;
  border-top: 1px solid #bcbcbc;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const CartEmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartDropdownFooter = styled.div`

`;

export const CartDropdownTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Avenir Book;
  font-weight: normal;
  line-height: 1.55;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CartDropdownTotalLabel = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const CartDropdownTotal = styled.p`
  margin: 0;
`;

export const CartDropdownButton = styled(CustomButton)`
  width: 100%;
  margin: 30px 0px;
`;
