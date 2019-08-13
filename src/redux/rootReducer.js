import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import menuReducer from "./menu/menu.reducer";
import filterReducer from "./filter/filter.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
  filter: filterReducer
});

export default rootReducer;
