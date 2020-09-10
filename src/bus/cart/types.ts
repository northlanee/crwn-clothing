import { ProductItem } from "types";

export const ADD_ITEM = "ADD_ITEM";
type AddItem = {
  type: typeof ADD_ITEM;
  payload: ProductItem;
};

export const REMOVE_ITEM = "REMOVE_ITEM";
type RemoveItem = {
  type: typeof REMOVE_ITEM;
  payload: number;
};

export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
type IncreaseQuantity = {
  type: typeof INCREASE_QUANTITY;
  payload: number;
};

export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
type DecreaseQuantity = {
  type: typeof DECREASE_QUANTITY;
  payload: number;
};

export type CartActionTypes =
  | AddItem
  | RemoveItem
  | IncreaseQuantity
  | DecreaseQuantity;
