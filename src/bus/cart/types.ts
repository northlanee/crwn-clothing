import { ProductItem, CartItem } from "../../types";

export type CartState = {
  cartItems: CartItem[];
};

export const ADD_ITEM = "ADD_ITEM";
export type AddItem = {
  type: typeof ADD_ITEM;
  payload: ProductItem;
};

export const REMOVE_ITEM = "REMOVE_ITEM";
export type RemoveItem = {
  type: typeof REMOVE_ITEM;
  payload: number;
};

export type CartActionTypes = AddItem | RemoveItem;
