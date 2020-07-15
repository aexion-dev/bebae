import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CustomButton from '../custom-button/custom-button';

const fetchCheckoutSession = async (items) => {
  return fetch('/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items
    }),
  }).then((res) => res.json());
};

const CheckoutButton = ({ items }) => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    async function initStripe() {
      const stripeHandle = await loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
      setStripe(stripeHandle);
    }
    initStripe();
  }, []);

  const handleClick = async (event) => {
    let stripeItems = [];
    items.forEach(item => {
      stripeItems.push({
        price: item.stripeId,
        quantity: item.quantity,
      })
    });

    const { sessionId } = await fetchCheckoutSession(stripeItems);
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    
    if (error) {
      console.log('Error creating Stripe Checkout: ', error);
    }
  }

  return (
    <CustomButton
      type='button'
      onClick={handleClick}
      >Checkout</CustomButton>
  );
}

export default CheckoutButton;
