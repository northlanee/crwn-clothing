import { createSelector } from "reselect";

import { AppState } from "init/rootReducer";
import { CartItem } from "types";

export const getCartItems = (state: AppState): CartItem[] =>
  state.cart.cartItems;

export const selectCartItemsCount = createSelector(
  getCartItems,
  (cartItems: CartItem[]): number =>
    cartItems.reduce(
      (totalCount: number, cartItem: CartItem): number =>
        totalCount + cartItem.quantity,
      0
    )
);

export const selectTotalPrice = createSelector(
  getCartItems,
  (cartItems: CartItem[]): number =>
    cartItems.reduce(
      (totalPrice: number, cartItem: CartItem): number =>
        totalPrice + cartItem.quantity * cartItem.productItem.price,
      0
    )
);
