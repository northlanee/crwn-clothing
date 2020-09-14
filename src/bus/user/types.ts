import { User } from "types";

export type UserState = {
  currentUser: User;
  isFetching: boolean;
};

export const SET_CURRENT_USER = "@USER/SET_CURRENT_USER";
export type SetCurrentUser = {
  type: typeof SET_CURRENT_USER;
  payload: User;
};

export const SET_FETCHING = "@USER/SET_FETCHING";
export type SetFetching = {
  type: typeof SET_FETCHING;
  payload: boolean;
};

export type UsersActionTypes = SetCurrentUser | SetFetching;
