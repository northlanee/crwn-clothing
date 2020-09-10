import {
  selectCartItemsCount,
  getCartItems,
  selectTotalPrice,
} from "./cart/selectors";
import { getCurrentUser } from "./user/selectors";
import { getDirectories } from "./directory/selectors";

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
    getDirectories,
  },
};
