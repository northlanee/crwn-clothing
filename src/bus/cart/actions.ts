import { ProductItem } from "types";
import {
  CartActionTypes,
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./types";

export const addItem = (item: ProductItem): CartActionTypes => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (id: string): CartActionTypes => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const increaseQuantity = (id: string): CartActionTypes => ({
  type: INCREASE_QUANTITY,
  payload: id,
});

export const decreaseQuantity = (id: string): CartActionTypes => ({
  type: DECREASE_QUANTITY,
  payload: id,
});
