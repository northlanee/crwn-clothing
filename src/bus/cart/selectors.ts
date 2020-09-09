import { createSelector } from "reselect";
import { AppState } from "../../init/rootReducer";
import { CartItem } from "./types";

const getCartItems = (state: AppState) => state.cart.cartItems;

export const getCartItemsCount = createSelector(
  getCartItems,
  (cartItems: CartItem[]): number => {
    return cartItems.reduce(
      (totalCount: number, cartItem: CartItem): number => {
        return totalCount + cartItem.quantity;
      },
      0
    );
  }
);
