import {
  selectCartItemsCount,
  getCartItems,
  selectTotalPrice,
} from "./cart/selectors";
import { getCurrentUser, getIsFetching } from "./user/selectors";
import { getCollections, getProducts, getFetching } from "./shop/selectors";

export const selectors = {
  cart: {
    selectCartItemsCount,
    getCartItems,
    selectTotalPrice,
  },
  user: {
    getCurrentUser,
    getIsFetching,
  },
  shop: {
    getCollections,
    getProducts,
    getFetching,
  },
};
