import { ProductItem, CartItem } from "../../types";

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

export const removeItemFromCart = (
  cartItems: CartItem[],
  id: number
): CartItem[] => cartItems.filter((item) => item.productItem.id !== id);

export const increaseQuantityOfItem = (
  cartItems: CartItem[],
  id: number
): CartItem[] =>
  cartItems.map((item) =>
    item.productItem.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );

export const decreaseQuantityOfItem = (
  cartItems: CartItem[],
  id: number
): CartItem[] =>
  cartItems
    .map((item) =>
      item.productItem.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity !== 0);
