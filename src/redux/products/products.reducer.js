import productsActionTypes from "./products.types";

const INITIAL_STATE = {
  allProducts: []
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsActionTypes.SET_PRODUCTS:
      return { ...state, allProducts: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
