import React, { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { actions } from "bus/actions";
import { CartItem } from "types";

import "./CheckoutItem.styles.scss";

type PropTypes = {
  cartItem: CartItem;
};

const CheckoutItem: FC<PropTypes> = React.memo(
  ({ cartItem }: PropTypes): ReactElement => {
    const dispatch = useDispatch();

    const removeItemHandler = () =>
      dispatch(actions.cart.removeItem(cartItem.productItem.id));

    const increaseQuantityHandler = () =>
      dispatch(actions.cart.increaseQuantity(cartItem.productItem.id));

    const decreaseQuantityHandler = () =>
      dispatch(actions.cart.decreaseQuantity(cartItem.productItem.id));

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
        <span className="quantity">
          <div className="arrow" onClick={decreaseQuantityHandler}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={increaseQuantityHandler}>
            &#10095;
          </div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={removeItemHandler}>
          &#10005;
        </div>
      </div>
    );
  }
);

export default CheckoutItem;
