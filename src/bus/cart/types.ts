import { ProductItem } from "../../types";

export type CartItem = {
  productItem: ProductItem;
  quantity: number;
};

export type CartState = {
  cartItems: CartItem[];
};

export const ADD_ITEM = "ADD_ITEM";
export type AddItem = {
  type: typeof ADD_ITEM;
  payload: ProductItem;
};

export type CartActionTypes = AddItem;
