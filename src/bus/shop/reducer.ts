import {
  ShopState,
  ShopActionTypes,
  SET_COLLECTIONS,
  SET_FETCHING,
} from "./types";
import { PRODUCT_ITEMS } from "./shop.data";

const initialState: ShopState = {
  collections: [],
  products: PRODUCT_ITEMS,
  isFetching: false,
};

export const shopReducer = (
  state = initialState,
  action: ShopActionTypes
): ShopState => {
  switch (action.type) {
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
  }
  return state;
};
