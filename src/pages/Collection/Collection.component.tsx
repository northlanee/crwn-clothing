import React, { FC, ReactElement } from "react";

import { useCollection } from "hooks";

import { CollectionItem } from "components/Shop";
import { Spinner } from "components/common";

import "./Collection.styles.scss";

const Collection: FC = (): ReactElement => {
  const [collection, products, isFetching] = useCollection();

  if (isFetching) return <Spinner />;

  const collectionJSX =
    collection && products.length > 0 ? (
      <>
        <h2 className="title">{collection.title}</h2>
        <div className="items">
          {products.map((product) => (
            <CollectionItem key={product.id} item={product} />
          ))}
        </div>
      </>
    ) : (
      <div>Collection is not exists</div>
    );

  return <div className="collection-page">{collectionJSX}</div>;
};

export default Collection;
