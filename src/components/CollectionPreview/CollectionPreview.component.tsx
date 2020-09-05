import React, { FC, ReactElement } from "react";

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
        return <div key={item.id}>{item.name}</div>;
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
