import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import menuReducer from "./menu/menu.reducer";
import filterReducer from "./filter/filter.reducer";
import productsReducer from "./products/products.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
  filter: filterReducer,
  products: productsReducer
});

export default rootReducer;
