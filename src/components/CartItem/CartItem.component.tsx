import React, { FC, ReactElement } from "react";
import { ProductItem } from "../../types";

import "./CartItem.styles.scss";

type PropTypes = {
  productItem: ProductItem;
  quantity: number;
};

const CartItem: FC<PropTypes> = ({
  productItem: { name, price, imageUrl },
  quantity,
}: PropTypes): ReactElement => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
