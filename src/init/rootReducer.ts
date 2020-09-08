import { combineReducers } from "redux";

import { userReducer as user } from "../bus/user/reducer";

export const rootReducer = combineReducers({ user });

export type AppState = ReturnType<typeof rootReducer>;
