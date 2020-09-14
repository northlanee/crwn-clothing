import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectors } from "bus/selectors";
import { actions } from "bus/actions";
import { Collection, ProductItem } from "types";

type UseCollectionType = () => [Collection | null, ProductItem[], boolean];

type ParamTypes = {
  collectionRouteName: string;
};

export const useCollection: UseCollectionType = () => {
  const dispatch = useDispatch();
  const { collectionRouteName } = useParams<ParamTypes>();
  const collection = useSelector(selectors.shop.getCurrentCollection);
  const products = useSelector(selectors.shop.getProducts);
  const isFetching = useSelector(selectors.shop.getFetching);

  React.useEffect(() => {
    dispatch(actions.shop.getProductsByCollectionAsync(collectionRouteName));
  }, [dispatch, collectionRouteName]);

  return [collection, products, isFetching];
};
