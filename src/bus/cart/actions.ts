import { CartActionTypes, ADD_ITEM } from "./types";
import { ProductItem } from "types";

export const addItem = (item: ProductItem): CartActionTypes => ({
  type: ADD_ITEM,
  payload: item,
});
