import { createSelector } from "reselect";
import { AppState } from "../../init/rootReducer";
import { CartItem, CartState } from "./types";

const getCart = (state: AppState): CartState => state.cart;

export const getCartItems = (state: AppState): CartItem[] =>
  state.cart.cartItems;

export const selectCartItemsCount = createSelector(
  getCart,
  (cart: CartState): number =>
    cart.cartItems.reduce(
      (totalCount: number, cartItem: CartItem): number =>
        totalCount + cartItem.quantity,
      0
    )
);
