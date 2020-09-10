<<<<<<< HEAD
import { ProductItem } from "types";

export type CartItem = {
  productItem: ProductItem;
  quantity: number;
};
=======
import { ProductItem, CartItem } from "../../types";
>>>>>>> b5095924d1b2940e13da695662313539d7be2b1e

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

export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export type IncreaseQuantity = {
  type: typeof INCREASE_QUANTITY;
  payload: number;
};

export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export type DecreaseQuantity = {
  type: typeof DECREASE_QUANTITY;
  payload: number;
};

export type CartActionTypes =
  | AddItem
  | RemoveItem
  | IncreaseQuantity
  | DecreaseQuantity;
