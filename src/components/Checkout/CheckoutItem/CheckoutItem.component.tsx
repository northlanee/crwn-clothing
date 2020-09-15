import React, { FC, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "bus/actions";
import { selectors } from "bus/selectors";
import { CartItem } from "types";

import "./CheckoutItem.styles.scss";

type PropTypes = {
  cartItem: CartItem;
};

const CheckoutItem: FC<PropTypes> = React.memo(
  ({ cartItem }: PropTypes): ReactElement => {
    const dispatch = useDispatch();
    const cart = useSelector(selectors.user.getCartItems);
    const user = useSelector(selectors.user.getCurrentUser);

    const removeItemHandler = () =>
      dispatch(
        actions.user.updateCartItemAsync(
          cart,
          cartItem.productItem,
          "remove",
          user?.id
        )
      );

    const increaseQuantityHandler = () =>
      dispatch(
        actions.user.updateCartItemAsync(
          cart,
          cartItem.productItem,
          "increase",
          user?.id
        )
      );

    const decreaseQuantityHandler = () =>
      dispatch(
        actions.user.updateCartItemAsync(
          cart,
          cartItem.productItem,
          "decrease",
          user?.id
        )
      );

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
