import {
  ShopState,
  ShopActionTypes,
  SET_COLLECTIONS,
  SET_FETCHING,
  SET_PRODUCTS,
  SET_CURRENT_COLLECTION,
} from "./types";

const initialState: ShopState = {
  collections: [],
  currentCollection: null,
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
    case SET_CURRENT_COLLECTION:
      return {
        ...state,
        currentCollection: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
  }
  return state;
};
