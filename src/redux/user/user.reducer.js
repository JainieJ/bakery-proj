import userActionTypes from "./user.types";

const INITIAL_STATE = { loggedInUser: {} };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.LOG_IN:
      return { ...state, loggedInUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
