import React, { FC, ReactElement } from "react";
import { Collection } from "../../types";

import { CollectionPreview } from "../../components";

import { SHOP_DATA } from "./shop.data";

const Shop: FC = (): ReactElement => {
  const collectionsJSX = SHOP_DATA.map(
    ({ id, title, items }: Collection): ReactElement => {
      return <CollectionPreview key={id} title={title} items={items} />;
    }
  );

  return <div>{collectionsJSX}</div>;
};

export default Shop;
