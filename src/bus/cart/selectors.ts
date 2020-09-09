import { createSelector } from "reselect";
import { AppState } from "../../init/rootReducer";
import { CartItem } from "./types";

const getCartItems = (state: AppState) => state.cart.cartItems;

export const getCartItemsCount = createSelector(
  getCartItems,
  (cartItems: CartItem[]): number =>
    cartItems.reduce(
      (totalCount: number, cartItem: CartItem): number =>
        totalCount + cartItem.quantity,
      0
    )
);
