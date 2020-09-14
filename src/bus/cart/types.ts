import { ProductItem } from "types";

export const ADD_ITEM = "@CART/ADD_ITEM";
type AddItem = {
  type: typeof ADD_ITEM;
  payload: ProductItem;
};

export const REMOVE_ITEM = "@CART/REMOVE_ITEM";
type RemoveItem = {
  type: typeof REMOVE_ITEM;
  payload: string;
};

export const INCREASE_QUANTITY = "@CART/INCREASE_QUANTITY";
type IncreaseQuantity = {
  type: typeof INCREASE_QUANTITY;
  payload: string;
};

export const DECREASE_QUANTITY = "@CART/DECREASE_QUANTITY";
type DecreaseQuantity = {
  type: typeof DECREASE_QUANTITY;
  payload: string;
};

export type CartActionTypes =
  | AddItem
  | RemoveItem
  | IncreaseQuantity
  | DecreaseQuantity;
