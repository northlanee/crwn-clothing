import {
  UsersActionTypes,
  SET_CURRENT_USER,
  SET_FETCHING,
  SET_CART,
} from "./types";
import { User as AppUser, ProductItem, CartItem } from "types";
import { ThunkAction } from "redux-thunk";
import { AppState } from "init/rootReducer";
import { Action } from "redux";
import { getUserProfileDocument, setCartApi, getCart } from "api";
import { User } from "firebase";
import {
  addItemToCart,
  removeItemFromCart,
  increaseQuantityOfItem,
  decreaseQuantityOfItem,
} from "./utils";

export const setCurrentUser = (user: AppUser): UsersActionTypes => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setFetching = (isFetching: boolean): UsersActionTypes => ({
  type: SET_FETCHING,
  payload: isFetching,
});

export const setCart = (cart: CartItem[]): UsersActionTypes => ({
  type: SET_CART,
  payload: cart,
});

export const updateCartItemAsync = (
  cart: CartItem[],
  item: ProductItem,
  type: "add" | "remove" | "increase" | "decrease",
  userId?: string
): ThunkAction<void, AppState, unknown, Action> => async (dispatch) => {
  let newCart: CartItem[] | null = null;
  switch (type) {
    case "add":
      newCart = addItemToCart(cart, item);
      break;
    case "remove":
      newCart = removeItemFromCart(cart, item.id);
      break;
    case "increase":
      newCart = increaseQuantityOfItem(cart, item.id);
      break;
    case "decrease":
      newCart = decreaseQuantityOfItem(cart, item.id);
      break;
  }
  if (userId) {
    await setCartApi(newCart, userId);
    dispatch(setCart(newCart));
  }
};

export const setUserAsync = (
  user: User | null
): ThunkAction<void, AppState, unknown, Action> => async (dispatch) => {
  dispatch(setFetching(true));
  if (user) {
    const currentUser = (await getUserProfileDocument(user)) as AppUser;
    if (currentUser) {
      const cart = await getCart(currentUser.id);
      dispatch(setCart(cart));
    }

    dispatch(setCurrentUser(currentUser));
  } else dispatch(setCurrentUser(null));

  dispatch(setFetching(false));
};
