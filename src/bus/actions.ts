import { setCurrentUser } from "./user/actions";
import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "./cart/actions";

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
};
