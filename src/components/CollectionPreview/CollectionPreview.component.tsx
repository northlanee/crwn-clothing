import React, { FC, ReactElement } from "react";
import { CollectionItem } from "../index";

import { ProductItem } from "../../types";

import "./CollectionPreview.styles.scss";

type PropTypes = {
  title: string;
  items: ProductItem[];
};

const CollectionPreview: FC<PropTypes> = ({
  title,
  items,
}: PropTypes): ReactElement => {
  const itemsJSX = items
    .filter((_, idx) => idx < 4)
    .map(
      (item: ProductItem): ReactElement => {
        return <CollectionItem key={item.id} item={item} />;
      }
    );

  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="preview">{itemsJSX}</div>
    </div>
  );
};

export default CollectionPreview;
