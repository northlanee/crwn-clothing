import {
  UsersActionTypes,
  SET_CURRENT_USER,
  UserState,
  SET_FETCHING,
} from "./types";

const initialState: UserState = {
  currentUser: null,
  isFetching: false,
};

export const userReducer = (
  state = initialState,
  action: UsersActionTypes
): UserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
