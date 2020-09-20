import { User, CartItem, ProductItem } from "types";

export type UserState = {
  currentUser: User;
  cartItems: CartItem[];
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

export const SET_CART = "@USER/SET_CART";
type SetCart = {
  type: typeof SET_CART;
  payload: CartItem[];
};

export const ADD_CART_ITEM = "@USER/ADD_CART_ITEM";
type AddItem = {
  type: typeof ADD_CART_ITEM;
  payload: ProductItem;
};

export const REMOVE_CART_ITEM = "@USER/REMOVE_CART_ITEM";
type RemoveItem = {
  type: typeof REMOVE_CART_ITEM;
  payload: string;
};

export const INCREASE_CART_ITEM_QUANTITY = "@USER/INCREASE_CART_QUANTITY";
type IncreaseQuantity = {
  type: typeof INCREASE_CART_ITEM_QUANTITY;
  payload: string;
};

export const DECREASE_CART_ITEM_QUANTITY = "@USER/DECREASE_CART_QUANTITY";
type DecreaseQuantity = {
  type: typeof DECREASE_CART_ITEM_QUANTITY;
  payload: string;
};

export type UsersActionTypes =
  | SetCurrentUser
  | SetFetching
  | AddItem
  | RemoveItem
  | IncreaseQuantity
  | DecreaseQuantity
  | SetCart;
