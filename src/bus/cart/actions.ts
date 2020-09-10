import {
  CartActionTypes,
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./types";
import { ProductItem } from "../../types";

export const addItem = (item: ProductItem): CartActionTypes => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (id: number): CartActionTypes => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const increaseQuantity = (id: number): CartActionTypes => ({
  type: INCREASE_QUANTITY,
  payload: id,
});

export const decreaseQuantity = (id: number): CartActionTypes => ({
  type: DECREASE_QUANTITY,
  payload: id,
});
