import React, { FC, ReactElement } from "react";

import { CollectionOverview } from "components";

const Shop: FC = (): ReactElement => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default Shop;
