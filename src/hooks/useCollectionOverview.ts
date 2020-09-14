import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { selectors } from "bus/selectors";
import { Collection, ProductItem } from "types";
import { actions } from "bus/actions";

type UseCollectionOverview = () => [Collection[], ProductItem[], boolean];

export const useCollectionOverview: UseCollectionOverview = () => {
  const collections = useSelector(selectors.shop.getCollections);
  const products = useSelector(selectors.shop.getProducts);
  const isFetching = useSelector(selectors.shop.getFetching);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.shop.getPreviewProductsAsync());
  }, [dispatch]);

  return [collections, products, isFetching];
};
