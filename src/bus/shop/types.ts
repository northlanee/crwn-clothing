import { Collection, ProductItem } from "types";

export type ShopState = {
  collections: Collection[];
  products: ProductItem[];
  isFetching: boolean;
};

export const SET_FETCHING = "SET_FETCHING";
type SetFetching = {
  type: typeof SET_FETCHING;
  payload: boolean;
};

export const SET_COLLECTIONS = "SET_COLLECTIONS";
type SetCollections = {
  type: typeof SET_COLLECTIONS;
  payload: Collection[];
};

export const GET_COLLECTIONS_ASYNC = "GET_COLLECTIONS_ASYNC";
type GetCollectionsAsync = { type: typeof GET_COLLECTIONS_ASYNC };

export type ShopActionTypes =
  | GetCollectionsAsync
  | SetCollections
  | SetFetching;
