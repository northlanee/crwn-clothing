import { combineReducers } from "redux";

import { userReducer as user } from "bus/user/reducer";
import { cartReducer as cart } from "bus/cart/reducer";
import { directoryReducer as directory } from "bus/directory/reducer";
import { shopReducer as shop } from "bus/shop/reducer";

export const rootReducer = combineReducers({ user, cart, directory, shop });

export type AppState = ReturnType<typeof rootReducer>;
