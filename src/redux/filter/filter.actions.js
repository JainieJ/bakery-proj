import filterActionTypes from "./filter.types";

export const updateProducts = items => ({
  type: filterActionTypes.UPDATE_PRODUCTS,
  payload: items
});
export const filterByName = eventTarget => ({
  type: filterActionTypes.FILTER_BY_NAME,
  payload: eventTarget
});

export const filterByType = eventTarget => ({
  type: filterActionTypes.FILTER_BY_TYPE,
  payload: eventTarget
});

export const filterByPrice = eventTarget => ({
  type: filterActionTypes.FILTER_BY_PRICE,
  payload: eventTarget
});

export const filterByGluten = eventTarget => ({
  type: filterActionTypes.FILTER_BY_GLUTEN,
  payload: eventTarget
});
