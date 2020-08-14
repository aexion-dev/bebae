import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;
  position: relative;
  border-bottom: 1px solid #bcbcbc;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const CartItemImage = styled.img`
  width: 6.25rem;
`;

export const CartItemDetailsContainer = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Avenir Book;
  font-weight: normal;
  line-height: 1.55;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const CartItemTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CartItemName = styled.span`
  font-weight: bold;
`;

export const CartItemSize = styled.span`

`;

export const CartItemBottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CartItemQuantity = styled.span`

`;

export const CartItemPrice = styled.span`

`;
