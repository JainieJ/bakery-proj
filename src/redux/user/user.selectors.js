import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectLoggedInUser = createSelector(
  [selectUser],
  user => user.loggedInUser
);

export const selectLoggedInUserName = createSelector(
  [selectLoggedInUser],
  loggedInUser => loggedInUser.displayName
);
