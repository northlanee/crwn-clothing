import React, { FC, ReactElement } from "react";
import { Item } from "../../types";

import "./CollectionItem.styles.scss";

type PropTypes = Item;

const CollectionItem: FC<PropTypes> = ({
  imageUrl,
  name,
  price,
}: PropTypes): ReactElement => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
