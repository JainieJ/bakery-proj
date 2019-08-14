import { createSelector } from "reselect";

const selectFilter = state => state.filter;

export const selectFilterSearch = createSelector(
  [selectFilter],
  filter => filter.search
);

export const selectFilterSelect = createSelector(
  [selectFilter],
  filter => filter.select
);

export const selectFilterPrice = createSelector(
  [selectFilter],
  filter => filter.price
);

export const selectFilterGlutenFree = createSelector(
  [selectFilter],
  filter => filter.glutenFree
);

export const selectFilteredProducts = createSelector(
  [selectFilter],
  filter => filter.filteredProducts
);
