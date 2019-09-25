import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducer";
import menuReducer from "./menu/menu.reducer";
import filterReducer from "./filter/filter.reducer";
import productsReducer from "./products/products.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
  filter: filterReducer,
  products: productsReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
