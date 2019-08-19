import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsTotalCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectCartItemsSubTotal = createSelector(
  [selectCartItems],
  cartItems => {
    const subtotal = cartItems.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
    return parseFloat(subtotal.toFixed(2));
  }
);

export const selectCartItemsSubTotalWithTaxes = createSelector(
  [selectCartItemsSubTotal],
  cartItemsSubtotal => parseFloat((cartItemsSubtotal * 0.2).toFixed(2))
);

export const selectCartItemsTotal = createSelector(
  [selectCartItemsSubTotal, selectCartItemsSubTotalWithTaxes],
  (cartItemsSubtotal, cartItemsSubtotalWithTaxes) =>
    parseFloat((cartItemsSubtotal + cartItemsSubtotalWithTaxes).toFixed(2))
);
