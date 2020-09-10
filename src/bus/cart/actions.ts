import { CartActionTypes, ADD_ITEM, REMOVE_ITEM } from "./types";
import { ProductItem } from "../../types";

export const addItem = (item: ProductItem): CartActionTypes => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (id: number): CartActionTypes => ({
  type: REMOVE_ITEM,
  payload: id,
});
