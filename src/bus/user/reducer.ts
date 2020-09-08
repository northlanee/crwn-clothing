import { UsersActionTypes, SET_CURRENT_USER, UserState } from "./types";

const initialState: UserState = {
  currentUser: null,
};

export const userReducer = (
  state = initialState,
  action: UsersActionTypes
): UserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
