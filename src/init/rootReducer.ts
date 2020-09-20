import { combineReducers } from "redux";

import { userReducer as user } from "bus/user/reducer";
import { shopReducer as shop } from "bus/shop/reducer";

export const rootReducer = combineReducers({ user, shop });

export type AppState = ReturnType<typeof rootReducer>;
