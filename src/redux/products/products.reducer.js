import { storeProducts } from "./../../context/productData";

const INITIAL_STATE = storeProducts;

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
