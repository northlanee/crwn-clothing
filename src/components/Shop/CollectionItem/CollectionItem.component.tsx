import React, { FC, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductItem } from "types";
import { actions } from "bus/actions";
import { selectors } from "bus/selectors";
import { Button } from "components/common";

import "./CollectionItem.styles.scss";

type PropTypes = {
  item: ProductItem;
};

const CollectionItem: FC<PropTypes> = ({ item }: PropTypes): ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector(selectors.user.getCurrentUser);
  const cart = useSelector(selectors.user.getCartItems);

  const addToCartHandler = () => {
    dispatch(actions.user.updateCartItemAsync(cart, item, "add", user?.id));
  };

  return (
    <div className="collection-item">
      <div className="header">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>

      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />

      <Button type="button" onClick={addToCartHandler} inverted>
        Add to cart
      </Button>
    </div>
  );
};

export default CollectionItem;
