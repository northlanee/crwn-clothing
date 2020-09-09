import { createSelector } from "reselect";
import { AppState } from "../../init/rootReducer";
import { CartItem, CartState } from "./types";

const getCart = (state: AppState): CartState => state.cart;

export const selectCartItems = createSelector(
  getCart,
  (cart: CartState): CartItem[] => cart.cartItems
);

export const getCartItemsCount = createSelector(
  getCart,
  (cart: CartState): number =>
    cart.cartItems.reduce(
      (totalCount: number, cartItem: CartItem): number =>
        totalCount + cartItem.quantity,
      0
    )
);
