import { ShopState } from "./types";
import { SHOP_DATA } from "./shop.data";

const initialState: ShopState = {
  collections: SHOP_DATA,
};

export const shopReducer = (state = initialState): ShopState => {
  return state;
};
