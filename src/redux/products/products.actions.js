import productsActionTypes from "./products.types";

export const setProducts = products => ({
  type: productsActionTypes.SET_PRODUCTS,
  payload: products
});
