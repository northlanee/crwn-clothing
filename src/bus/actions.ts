import { setCurrentUser } from "./user/actions";
import { addItem, removeItem } from "./cart/actions";

export const actions = {
  user: {
    setCurrentUser,
  },
  cart: {
    addItem,
    removeItem,
  },
};
