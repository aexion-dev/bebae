import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { loadCheckout } from '../../stripe/stripe.utils';

const CheckoutButton = ({ items }) => {

  const handleClick = async (event) => {
    let stripeItems = [];
    items.forEach(item => {
      stripeItems.push({
        price: item.stripeId,
        quantity: item.quantity,
      })
    });

    loadCheckout(stripeItems);
  }

  return (
    <CustomButton
      type='button'
      onClick={handleClick}
      >Checkout</CustomButton>
  );
}

export default CheckoutButton;
