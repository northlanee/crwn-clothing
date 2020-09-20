import React, { FC, ReactElement } from "react";
import { Route, useRouteMatch } from "react-router-dom";

import { CollectionOverview } from "components/Shop";
import { Collection } from "pages";

const Shop: FC = (): ReactElement => {
  const { path } = useRouteMatch();

  return (
    <div className="shop-page">
      <Route path={`${path}`} component={CollectionOverview} exact />
      <Route path={`${path}/:collectionRouteName`} component={Collection} />
    </div>
  );
};

export default Shop;
