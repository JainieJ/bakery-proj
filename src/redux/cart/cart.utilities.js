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

export const removeProductFromCart = (product, productsInCart) => {
  return productsInCart.filter(item => item.id !== product.id);
};

export const decreaseProductCount = (product, productsInCart) => {
  if (product.quantity === 1)
    return removeProductFromCart(product, productsInCart);
  return productsInCart.map(item =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
