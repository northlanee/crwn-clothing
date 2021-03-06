import { Collection, ProductItem } from "types";
import { AppState } from "init/rootReducer";

export const getCollections = (state: AppState): Collection[] =>
  state.shop.collections;

export const getCurrentCollection = (state: AppState): Collection | null =>
  state.shop.currentCollection;

export const getProducts = (state: AppState): ProductItem[] =>
  state.shop.products;

export const getFetching = (state: AppState): boolean => state.shop.isFetching;
