import { CartState, CartActionTypes, ADD_ITEM, REMOVE_ITEM } from "./types";
import { addItemToCart } from "./utils";
import { CartItem } from "../../types";

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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: CartItem): boolean =>
            cartItem.productItem.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
