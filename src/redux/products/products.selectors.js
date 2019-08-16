import { createSelector } from "reselect";

const selectProducts = state => state.products;

const selectAllProducts = createSelector(
  [selectProducts],
  products => products.allProducts
);

export const selectProductTypes = createSelector(
  [selectAllProducts],
  allProducts => {
    let productTypes = allProducts.map(product => product.type);
    const productSet = new Set(productTypes);
    productTypes = [...productSet];
    productTypes.unshift("all");
    return productTypes;
  }
);

export const selectProductMaxPrice = createSelector(
  [selectAllProducts],
  allProducts => {
    const prices = allProducts.map(product => product.price);
    return Math.max(...prices);
  }
);

export const selectSingleProduct = urlParam => {
  return createSelector(
    [selectAllProducts],
    allProducts => allProducts.find(product => product.id === urlParam)
  );
};
