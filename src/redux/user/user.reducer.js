import userActionTypes from "./user.types";

const INITIAL_STATE = { user: null };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.LOG_IN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
