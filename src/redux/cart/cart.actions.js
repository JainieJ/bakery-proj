import cartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const closeCart = () => ({
  type: cartActionTypes.CLOSE_CART
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});
