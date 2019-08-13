import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.items
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  items => items.reduce((acc, curr) => acc + curr.quantity, 5)
);
