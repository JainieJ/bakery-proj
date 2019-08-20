import menuActionTypes from "./menu.types";

export const toggleMenuHidden = () => ({
  type: menuActionTypes.TOGGLE_MENU_HIDDEN
});

export const closeMenu = () => ({
  type: menuActionTypes.CLOSE_MENU
});
