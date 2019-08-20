import cartActionTypes from "./cart.types";
import {
  addProductToCart,
  removeProductFromCart,
  decreaseProductCount
} from "./cart.utilities";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case cartActionTypes.CLOSE_CART:
      return { ...state, hidden: true };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addProductToCart(action.payload, state.cartItems)
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeProductFromCart(action.payload, state.cartItems)
      };
    case cartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseProductCount(action.payload, state.cartItems)
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default cartReducer;
