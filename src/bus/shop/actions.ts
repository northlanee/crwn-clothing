import {
  ShopActionTypes,
  SET_COLLECTIONS,
  SET_FETCHING,
  SET_PRODUCTS,
} from "./types";
import { Collection, ProductItem } from "types";

import { ThunkAction } from "redux-thunk";
import { AppState } from "init/rootReducer";
import { Action } from "redux";
import { fetchCollections, fetchPreviewProducts } from "api";

export const setCollections = (payload: Collection[]): ShopActionTypes => ({
  type: SET_COLLECTIONS,
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
  const collections: Collection[] = await fetchCollections();
  dispatch(setCollections(collections));
  dispatch(setFetching(false));
};
