import { ShopActionTypes, SET_COLLECTIONS, SET_FETCHING } from "./types";
import { Collection } from "types";

import { firestore } from "firebase/firebase.utils";
import { ThunkAction } from "redux-thunk";
import { AppState } from "init/rootReducer";
import { Action } from "redux";

export const setCollections = (payload: Collection[]): ShopActionTypes => ({
  type: SET_COLLECTIONS,
  payload: payload,
});

export const setFetching = (payload: boolean): ShopActionTypes => ({
  type: SET_FETCHING,
  payload: payload,
});

export const getCollectionsAsync = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action
> => async (dispatch) => {
  dispatch(setFetching(true));
  const collectionsArr: Collection[] = [];
  const collectionsSnapshot = await firestore
    .collection("collections")
    .orderBy("large")
    .get();

  collectionsSnapshot.forEach((collection) =>
    collectionsArr.push({
      id: collection.id,
      ...collection.data(),
    } as Collection)
  );
  dispatch(setCollections(collectionsArr));
  dispatch(setFetching(false));
};
