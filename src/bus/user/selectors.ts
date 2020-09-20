import { AppState } from "init/rootReducer";
import { createSelector } from "reselect";
import { User, CartItem } from "types";

export const getCurrentUser = (state: AppState): User => state.user.currentUser;

export const getIsFetching = (state: AppState): boolean =>
  state.user.isFetching;

export const getCartItems = (state: AppState): CartItem[] =>
  state.user.cartItems;

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
