import { createSelector } from "reselect";

const selectProducts = state => state.products;

export const selectProductTypes = createSelector(
  [selectProducts],
  products => {
    let productTypes = products.map(product => product.type);
    const productSet = new Set(productTypes);
    productTypes = [...productSet];
    productTypes.unshift("all");
    return productTypes;
  }
);

export const selectProductMaxPrice = createSelector(
  [selectProducts],
  products => {
    const prices = products.map(product => product.price);
    return Math.max(...prices);
  }
);
