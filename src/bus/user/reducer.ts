import {
  UsersActionTypes,
  SET_CURRENT_USER,
  UserState,
  SET_FETCHING,
  SET_CART,
} from "./types";

const initialState: UserState = {
  currentUser: null,
  cartItems: [],
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
    case SET_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
