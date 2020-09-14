import { UsersActionTypes, SET_CURRENT_USER, SET_FETCHING } from "./types";
import { User as AppUser } from "types";
import { ThunkAction } from "redux-thunk";
import { AppState } from "init/rootReducer";
import { Action } from "redux";
import { getUserProfileDocument } from "api";
import { User } from "firebase";

export const setCurrentUser = (user: AppUser): UsersActionTypes => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setFetching = (isFetching: boolean): UsersActionTypes => ({
  type: SET_FETCHING,
  payload: isFetching,
});

export const setUserAsync = (
  user: User | null
): ThunkAction<void, AppState, unknown, Action> => async (dispatch) => {
  dispatch(setFetching(true));
  if (user) {
    const currentUser = (await getUserProfileDocument(user)) as AppUser;
    dispatch(setCurrentUser(currentUser));
  } else dispatch(setCurrentUser(null));

  dispatch(setFetching(false));
};
