import { setCurrentUser, setUserAsync } from "./user/actions";
import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "./cart/actions";
import {
  getCollectionsAsync,
  getPreviewProductsAsync,
  getProductsByCollection,
} from "./shop/actions";

export const actions = {
  user: {
    setCurrentUser,
    setUserAsync,
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
    getProductsByCollection,
  },
};
