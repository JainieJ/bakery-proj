import { storeProducts } from "./../../context/productData";
import filterActionTypes from "./filter.types";
import { filterProducts } from "./filter.utilities";

const INITIAL_STATE = {
  search: "",
  select: "all",
  price: "",
  glutenFree: false,
  filteredProducts: storeProducts,
  allProducts: storeProducts
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case filterActionTypes.FILTER_BY_NAME:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        filteredProducts: filterProducts(
          state,
          action.payload.name,
          action.payload.value
        )
      };
    case filterActionTypes.FILTER_BY_TYPE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        filteredProducts: filterProducts(
          state,
          action.payload.name,
          action.payload.value
        )
      };
    case filterActionTypes.FILTER_BY_PRICE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        filteredProducts: filterProducts(
          state,
          action.payload.name,
          action.payload.value
        )
      };
    case filterActionTypes.FILTER_BY_GLUTEN:
      return {
        ...state,
        [action.payload.name]: action.payload.checked,
        filteredProducts: filterProducts(
          state,
          action.payload.name,
          action.payload.value
        )
      };
    default:
      return state;
  }
};

export default filterReducer;
