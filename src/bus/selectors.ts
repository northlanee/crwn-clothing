import { getCartItemsCount, selectCartItems } from "./cart/selectors";
import { selectCurrentUser } from "./user/selectors";

export const selectors = {
  cart: {
    getCartItemsCount,
    selectCartItems,
  },
  user: {
    selectCurrentUser,
  },
};
