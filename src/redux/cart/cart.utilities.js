export const addProductToCart = (product, productsInCart) => {
  const addedProduct = productsInCart.find(
    currentProduct => currentProduct.id === product.id
  );
  if (addedProduct) {
    return productsInCart.map(currentProduct => {
      return currentProduct.id === product.id
        ? { ...currentProduct, quantity: currentProduct.quantity + 1 }
        : currentProduct;
    });
  }
  return [...productsInCart, { ...product, quantity: 1 }];
};
