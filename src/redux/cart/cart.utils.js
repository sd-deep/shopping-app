export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemoveFromCart) => cartItems.filter(
    cartItem => cartItem.id !== itemToRemoveFromCart.id
    );

export const decreaseItem =(cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return removeItemFromCart(cartItems, cartItemToRemove)
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

