import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import { selectors } from "../../bus/selectors";

import { CheckoutItem } from "../../components";

import "./Checkout.styles.scss";

const Checkout: FC = (): ReactElement => {
  const totalPrice = useSelector(selectors.cart.selectTotalPrice);
  const cartItems = useSelector(selectors.cart.getCartItems);

  const cariItemsJSX = cartItems.map((item) => (
    <CheckoutItem key={item.productItem.id} cartItem={item} />
  ));

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cariItemsJSX}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
