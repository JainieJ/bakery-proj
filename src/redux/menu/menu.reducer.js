import menuActionTypes from "./menu.types";
const INITIAL_STATE = {
  hidden: true
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case menuActionTypes.TOGGLE_MENU_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case menuActionTypes.CLOSE_MENU:
      return { ...state, hidden: true };
    default:
      return state;
  }
};

export default menuReducer;
