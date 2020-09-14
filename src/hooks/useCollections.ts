import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectors } from "bus/selectors";
import { actions } from "bus/actions";

import { Collection } from "types";

type UseCollectionType = () => [Collection[], boolean];

export const useCollections: UseCollectionType = () => {
  const sections = useSelector(selectors.shop.getCollections);
  const isFetching = useSelector(selectors.shop.getFetching);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.shop.getCollectionsAsync());
  }, [dispatch]);

  return [sections, isFetching];
};
