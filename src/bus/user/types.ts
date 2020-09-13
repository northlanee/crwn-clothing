import { User } from "types";

export type UserState = {
  currentUser: User;
};

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export type SetCurrentUser = {
  type: typeof SET_CURRENT_USER;
  payload: User;
};

export type UsersActionTypes = SetCurrentUser;
