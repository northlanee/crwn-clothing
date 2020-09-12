import {
  selectCartItemsCount,
  getCartItems,
  selectTotalPrice,
} from "./cart/selectors";
import { getCurrentUser } from "./user/selectors";
import { getCollections, getProducts, getFetching } from "./shop/selectors";

export const selectors = {
  cart: {
    selectCartItemsCount,
    getCartItems,
    selectTotalPrice,
  },
  user: {
    getCurrentUser,
  },
  shop: {
    getCollections,
    getProducts,
    getFetching,
  },
};
