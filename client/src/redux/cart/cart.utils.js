export const addItemToCart = (cartItems, cartItemToAdd) => {
  //Check if cart has matching item (same size/style)
  const existingCartItem = cartItems.find(
    cartItem => (cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size)
  );

  if(existingCartItem) {
    return cartItems.map(cartItem =>
      (cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size)
        ? {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => (cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size)
  );

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => {
      if(cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size)
        return null;

      return cartItem;
    });
  }

  return cartItems.map(cartItem =>
    (cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size)
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  )
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const existingCartItem = cartItems.find(
    cartItem => (cartItem.id === cartItemToClear.id && cartItem.size === cartItemToClear.size)
  );

  if(existingCartItem) {
    return cartItems.filter(cartItem => {
      if(cartItem.id === cartItemToClear.id && cartItem.size === cartItemToClear.size)
        return null;

      return cartItem;
    });
  }
}
