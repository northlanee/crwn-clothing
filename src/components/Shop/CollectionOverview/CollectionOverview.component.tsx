import React, { FC, ReactElement } from "react";

import { Collection } from "types";
import { useCollectionOverview } from "hooks";

import { Spinner } from "components/common";
import { CollectionPreview } from "components/Shop";

import "./CollectionOverview.styles.scss";

const CollectionOverview: FC = (): ReactElement => {
  const [collections, products, isFetching] = useCollectionOverview();

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
