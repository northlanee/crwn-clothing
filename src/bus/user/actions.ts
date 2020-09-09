import { User, UsersActionTypes, SET_CURRENT_USER } from "./types";

export const setCurrentUser = (user: User): UsersActionTypes => ({
  type: SET_CURRENT_USER,
  payload: user,
});
