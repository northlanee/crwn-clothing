import { selectCartItemsCount, getCartItems } from "./cart/selectors";
import { getCurrentUser } from "./user/selectors";

export const selectors = {
  cart: {
    selectCartItemsCount,
    getCartItems,
  },
  user: {
    getCurrentUser,
  },
};
