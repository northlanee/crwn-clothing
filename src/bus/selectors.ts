import {
  selectCartItemsCount,
  getCartItems,
  selectTotalPrice,
} from "./cart/selectors";
import { getCurrentUser } from "./user/selectors";
import { getSections } from "./directory/selectors";
import { getCollections } from "./shop/selectors";

export const selectors = {
  cart: {
    selectCartItemsCount,
    getCartItems,
    selectTotalPrice,
  },
  user: {
    getCurrentUser,
  },
  directory: {
    getSections,
  },
  shop: {
    getCollections,
  },
};
