import React, { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectors } from "bus/selectors";

import "./Collection.styles.scss";

type ParamTypes = {
  collectionRouteName: string;
};

const Category: FC = (): ReactElement => {
  const { collectionRouteName } = useParams<ParamTypes>();
  const collections = useSelector(selectors.shop.getCollections);
  const allProducts = useSelector(selectors.shop.getProducts);

  const collectionItem = collections.filter(
    (item) => item.routeName === collectionRouteName
  )[0];
  const collectionJSX = collectionItem ? (
    allProducts
      .filter((item) => item.collectionId === collectionItem.id)
      .map((product) => <div>{product.name}</div>)
  ) : (
    <div>111</div>
  );

  return <div className="category">{collectionJSX}</div>;
};

export default Category;
