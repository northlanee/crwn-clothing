import { Collection } from "types";
import { AppState } from "init/rootReducer";

export const getCollections = (state: AppState): Collection[] =>
  state.shop.collections;
