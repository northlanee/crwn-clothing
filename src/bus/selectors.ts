import {
  getCurrentUser,
  getIsFetching,
  selectCartItemsCount,
  getCartItems,
  selectTotalPrice,
} from "./user/selectors";
import {
  getCollections,
  getProducts,
  getFetching,
  getCurrentCollection,
} from "./shop/selectors";

export const selectors = {
  user: {
    getCurrentUser,
    getIsFetching,
    selectCartItemsCount,
    getCartItems,
    selectTotalPrice,
  },
  shop: {
    getCollections,
    getProducts,
    getFetching,
    getCurrentCollection,
  },
};
