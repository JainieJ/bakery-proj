import { storeProducts } from "./../../context/productData";
import filterActionTypes from "./filter.types";
import { filterItemsByName, filterItemsByType } from "./filter.utilities";

const INITIAL_STATE = {
  search: "",
  select: "all",
  price: "",
  glutenFree: false,
  filteredProducts: storeProducts,
  allProducts: storeProducts
};

//continue moving filtering functionality to reducer

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case filterActionTypes.FILTER_BY_NAME:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        filteredProducts: filterItemsByName(
          state.allProducts,
          action.payload.value
        )
      };
    case filterActionTypes.FILTER_BY_TYPE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        filteredProducts: filterItemsByType(
          state.allProducts,
          action.payload.value
        )
      };
    default:
      return state;
  }
};

export default filterReducer;
