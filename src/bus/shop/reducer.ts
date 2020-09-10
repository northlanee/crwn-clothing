import { ShopState } from "./types";
import { COLLECTIONS_ITEMS, PRODUCT_ITEMS } from "./shop.data";

const initialState: ShopState = {
  collections: COLLECTIONS_ITEMS,
  products: PRODUCT_ITEMS,
};

export const shopReducer = (state = initialState): ShopState => {
  return state;
};
