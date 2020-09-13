import { setCurrentUser } from "./user/actions";
import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "./cart/actions";
import { getCollectionsAsync, getPreviewProductsAsync } from "./shop/actions";

export const actions = {
  user: {
    setCurrentUser,
  },
  cart: {
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  },
  shop: {
    getCollectionsAsync,
    getPreviewProductsAsync,
  },
};
