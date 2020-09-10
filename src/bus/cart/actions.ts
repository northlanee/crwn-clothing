<<<<<<< HEAD
import { CartActionTypes, ADD_ITEM } from "./types";
import { ProductItem } from "types";
=======
import {
  CartActionTypes,
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./types";
import { ProductItem } from "../../types";
>>>>>>> b5095924d1b2940e13da695662313539d7be2b1e

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
