import {
  setCurrentUser,
  setUserAsync,
  updateCartItemAsync,
  setCart,
} from "./user/actions";

import {
  getCollectionsAsync,
  getPreviewProductsAsync,
  getProductsByCollectionAsync,
} from "./shop/actions";

export const actions = {
  user: {
    setCurrentUser,
    setUserAsync,
    updateCartItemAsync,
    setCart,
  },
  shop: {
    getCollectionsAsync,
    getPreviewProductsAsync,
    getProductsByCollectionAsync,
  },
};
