import React, { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { ProductItem } from "types";
import { actions } from "bus/actions";

import { Button } from "components";

import "./CollectionItem.styles.scss";

type PropTypes = {
  item: ProductItem;
};

const CollectionItem: FC<PropTypes> = ({ item }: PropTypes): ReactElement => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(actions.cart.addItem(item));
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      <Button type="button" onClick={addToCartHandler} inverted>
        Add to cart
      </Button>
    </div>
  );
};

export default CollectionItem;
