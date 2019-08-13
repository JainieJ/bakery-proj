import filterActionTypes from "./filter.types";
import { filterItemsByName } from "./filter.utilities";

const INITIAL_STATE = {
  search: "",
  select: "all",
  price: "",
  glutenFree: false,
  filteredItems: []
};

//continue moving filtering functionality to reducer

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case filterActionTypes.FILTER_BY_NAME:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        filteredItems: filterItemsByName(
          state.filteredItems,
          state[action.payload.value]
        )
      };
    default:
      return state;
  }
};

export default filterReducer;
