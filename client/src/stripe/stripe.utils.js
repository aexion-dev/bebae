import { loadStripe } from '@stripe/stripe-js';

const apiKey = process.env.REACT_APP_STRIPE_API_KEY;

const stripePromise = loadStripe(apiKey);

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
}

export const loadCheckout = async (items) => {
  const { sessionId } = await fetchCheckoutSession(items);
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    sessionId,
  });
  if (error) {
    console.log('error creating checkout', error.message);
  }
}

export const createStripeProduct = async (product) => {
  return fetch('/create-stripe-product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product
    }),
  }).then((res) => res.json());
}
