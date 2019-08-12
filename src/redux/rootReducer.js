import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import menuReducer from "./menu/menu.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer
});

export default rootReducer;
