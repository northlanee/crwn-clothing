import { combineReducers } from "redux";

import { userReducer as user } from "bus/user/reducer";
import { cartReducer as cart } from "bus/cart/reducer";

export const rootReducer = combineReducers({ user, cart });

export type AppState = ReturnType<typeof rootReducer>;
