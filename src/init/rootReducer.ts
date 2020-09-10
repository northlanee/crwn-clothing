import { combineReducers } from "redux";

import { userReducer as user } from "bus/user/reducer";
import { cartReducer as cart } from "bus/cart/reducer";
import { directoryReducer as directory } from "bus/directory/reducer";

export const rootReducer = combineReducers({ user, cart, directory });

export type AppState = ReturnType<typeof rootReducer>;
