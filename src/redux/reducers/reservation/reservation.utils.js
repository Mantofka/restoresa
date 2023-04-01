export const addFood = (foods, foodToAdd) => {
  const found = foods.find(({ id }) => id === foodToAdd.id);

  if (!found) return [...foods, { ...foodToAdd, quantity: 1 }];
  return foods.map((food) =>
    food.id === foodToAdd.id
      ? { ...food, quantity: food.quantity + 1 }
      : { ...food }
  );
};

export const removeFoodById = (cartItems, cartItemToRemove) => {
  const existringCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existringCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
