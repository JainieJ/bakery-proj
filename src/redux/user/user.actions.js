import userActionTypes from "./user.types";

export const setUser = user => ({
  type: userActionTypes.LOG_IN,
  payload: user
});
