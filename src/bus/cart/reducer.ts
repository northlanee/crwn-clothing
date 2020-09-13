import {
  CartActionTypes,
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./types";
import {
  addItemToCart,
  removeItemFromCart,
  increaseQuantityOfItem,
  decreaseQuantityOfItem,
} from "./utils";
import { CartItem } from "types";

const initialState = {
  cartItems: [] as CartItem[],
};

export type CartState = typeof initialState;

export const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: increaseQuantityOfItem(state.cartItems, action.payload),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseQuantityOfItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
