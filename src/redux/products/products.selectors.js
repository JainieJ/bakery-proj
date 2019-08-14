import { createSelector } from "reselect";

const selectProducts = state => state.products;

export const selectProductTypes = createSelector(
  [selectProducts],
  products => {
    let productTypes = products.map(item => item.type);
    const productSet = new Set(productTypes);
    productTypes = [...productSet];
    productTypes.unshift("all");
    return productTypes;
  }
);
