import {
  setCurrentUser,
  setUserAsync,
  updateCartItemAsync,
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
  },
  shop: {
    getCollectionsAsync,
    getPreviewProductsAsync,
    getProductsByCollectionAsync,
  },
};
