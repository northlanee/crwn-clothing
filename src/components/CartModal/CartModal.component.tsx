import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

import { AppState } from "../../init/rootReducer";

import { Button, CartItem } from "../index";

import "./CartModal.styles.scss";

type PropTypes = {
  show: boolean;
};

const CartModal: FC<PropTypes> = ({ show }: PropTypes): ReactElement => {
  const { cartItems } = useSelector((state: AppState) => ({
    cartItems: state.cart.cartItems,
  }));

  const noItemsJSX = <div className="no-items">No items in cart yet!</div>;

  const cartItemsJSX =
    cartItems.length === 0
      ? noItemsJSX
      : cartItems.map((item) => (
          <CartItem
            key={item.productItem.id}
            productItem={item.productItem}
            quantity={item.quantity}
          />
        ));

  return (
    <div className={cn("cart-modal", { hidden: !show })}>
      <div className="cart-items">{cartItemsJSX}</div>
      <Button type="button">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartModal;
