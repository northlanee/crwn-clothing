import React, { FC, ReactElement } from "react";

import "./CheckoutItem.styles.scss";
import { CartItem } from "../../types";

type PropTypes = {
  cartItem: CartItem;
};

const CheckoutItem: FC<PropTypes> = ({ cartItem }: PropTypes): ReactElement => {
  const {
    productItem: { name, imageUrl, price },
    quantity,
  } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
