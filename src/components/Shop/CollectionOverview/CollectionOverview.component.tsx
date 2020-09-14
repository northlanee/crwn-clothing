import React, { FC, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectors } from "bus/selectors";
import { Collection } from "types";
import { actions } from "bus/actions";
import { Spinner } from "components/common";
import { CollectionPreview } from "components/Shop";

import "./CollectionOverview.styles.scss";

const CollectionOverview: FC = (): ReactElement => {
  const collections = useSelector(selectors.shop.getCollections);
  const products = useSelector(selectors.shop.getProducts);
  const isFetching = useSelector(selectors.shop.getFetching);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.shop.getPreviewProductsAsync());
  }, [dispatch]);

  if (isFetching) return <Spinner />;

  const collectionsJSX = collections.map(
    ({ id, title }: Collection): ReactElement => {
      const items = products.filter((item: any) => item.collectionId === id);
      return <CollectionPreview key={id} title={title} items={items} />;
    }
  );

  return <div className="collections-overview">{collectionsJSX}</div>;
};

export default CollectionOverview;
