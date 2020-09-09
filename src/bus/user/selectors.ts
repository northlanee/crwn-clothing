import { createSelector } from "reselect";
import { AppState } from "../../init/rootReducer";
import { User, UserState } from "./types";

const getUser = (state: AppState): UserState => state.user;

export const selectCurrentUser = createSelector(
  getUser,
  (user: UserState): User => user.currentUser
);
