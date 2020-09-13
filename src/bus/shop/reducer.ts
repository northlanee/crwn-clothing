import {
  ShopState,
  ShopActionTypes,
  SET_COLLECTIONS,
  SET_FETCHING,
  SET_PRODUCTS,
} from "./types";

const initialState: ShopState = {
  collections: [],
  products: [],
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
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
  }
  return state;
};
