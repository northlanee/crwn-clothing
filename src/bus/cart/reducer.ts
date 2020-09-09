import { CartState, CartActionTypes, ADD_ITEM } from "./types";
import { addItemToCart } from "./utils";

const initialState: CartState = {
  cartItems: [],
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
