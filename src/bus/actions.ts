import { setCurrentUser } from "./user/actions";
import { addItem } from "./cart/actions";

export const actions = {
  user: {
    setCurrentUser,
  },
  cart: {
    addItem,
  },
};
