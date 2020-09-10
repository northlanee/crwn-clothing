import { createSelector } from "reselect";
<<<<<<< HEAD
import { AppState } from "init/rootReducer";
import { CartItem, CartState } from "./types";

const getCart = (state: AppState): CartState => state.cart;
=======
import { AppState } from "../../init/rootReducer";
import { CartItem } from "../../types";
>>>>>>> b5095924d1b2940e13da695662313539d7be2b1e

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
