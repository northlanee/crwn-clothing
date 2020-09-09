import React, { FC, ReactElement } from "react";

import { Button } from "../index";

import "./CartModal.styles.scss";

const CartModal: FC = (): ReactElement => {
  return (
    <div className="cart-modal">
      <div className="cart-items">111</div>
      <Button type="button">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartModal;
