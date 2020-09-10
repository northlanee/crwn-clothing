import { ProductItem } from "types";
import { CartItem } from "./types";

export const addItemToCart = (
  cartItems: CartItem[],
  itemToAdd: ProductItem
): CartItem[] => {
  const isItemExists = cartItems.find(
    (cartItem) => cartItem.productItem.id === itemToAdd.id
  );
  if (isItemExists)
    return cartItems.map((cartItem) =>
      cartItem.productItem.id === itemToAdd.id
        ? { productItem: itemToAdd, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  return [...cartItems, { productItem: itemToAdd, quantity: 1 }];
};
