import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import { selectors } from "bus/selectors";
import { Collection } from "types";
import { CollectionPreview } from "components";

import "./CollectionOverview.styles.scss";

const CollectionOverview: FC = (): ReactElement => {
  const collections = useSelector(selectors.shop.getCollections);
  const products = useSelector(selectors.shop.getProducts);

  const collectionsJSX = collections.map(
    ({ id, title }: Collection): ReactElement => {
      const items = products.filter((item) => item.collectionId === id);
      return <CollectionPreview key={id} title={title} items={items} />;
    }
  );

  return <div className="collections-overview">{collectionsJSX}</div>;
};

export default CollectionOverview;
