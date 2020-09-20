import {
  ShopActionTypes,
  SET_COLLECTIONS,
  SET_FETCHING,
  SET_PRODUCTS,
  SET_CURRENT_COLLECTION,
} from "./types";
import { Collection, ProductItem } from "types";

import { ThunkAction } from "redux-thunk";
import { AppState } from "init/rootReducer";
import { Action } from "redux";
import {
  fetchCollections,
  fetchPreviewProducts,
  fetchProductsByCollection,
} from "api";

export const setCollections = (payload: Collection[]): ShopActionTypes => ({
  type: SET_COLLECTIONS,
  payload: payload,
});

export const setCurrentCollection = (
  payload: Collection | null
): ShopActionTypes => ({
  type: SET_CURRENT_COLLECTION,
  payload: payload,
});

export const setProducts = (payload: ProductItem[]): ShopActionTypes => ({
  type: SET_PRODUCTS,
  payload: payload,
});

export const setFetching = (payload: boolean): ShopActionTypes => ({
  type: SET_FETCHING,
  payload: payload,
});

export const getPreviewProductsAsync = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action
> => async (dispatch) => {
  dispatch(setFetching(true));
  const collections: Collection[] = await fetchCollections();
  const previewProducts: ProductItem[] = await fetchPreviewProducts();
  dispatch(setCollections(collections));
  dispatch(setProducts(previewProducts));
  dispatch(setFetching(false));
};

export const getCollectionsAsync = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action
> => async (dispatch) => {
  dispatch(setFetching(true));
  dispatch(setCollections([]));
  const collections: Collection[] = await fetchCollections();
  dispatch(setCollections(collections));
  dispatch(setFetching(false));
};

export const getProductsByCollectionAsync = (
  collentionName: string
): ThunkAction<void, AppState, unknown, Action> => async (dispatch) => {
  dispatch(setFetching(true));
  dispatch(setCurrentCollection(null));
  dispatch(setProducts([]));

  const collections: Collection[] = await fetchCollections();
  const collection = collections.filter(
    (c) => c.routeName === collentionName
  )[0];

  if (typeof collection !== "undefined") {
    dispatch(setCurrentCollection(collection));
    const products = await fetchProductsByCollection(collection.id);
    dispatch(setProducts(products));
  }

  dispatch(setFetching(false));
};
