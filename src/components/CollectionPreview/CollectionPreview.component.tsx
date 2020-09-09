import React, { FC, ReactElement } from "react";
import { CollectionItem } from "../index";

import { Item } from "../../types";

import "./CollectionPreview.styles.scss";

type PropTypes = {
  title: string;
  items: Item[];
};

const CollectionPreview: FC<PropTypes> = ({
  title,
  items,
}: PropTypes): ReactElement => {
  const itemsJSX = items
    .filter((_, idx) => idx < 4)
    .map(
      (item: Item): ReactElement => {
        return <CollectionItem key={item.id} {...item} />;
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
