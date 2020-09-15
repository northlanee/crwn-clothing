import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import { selectors } from "bus/selectors";

import { CheckoutItem, StripeButton } from "components/Checkout";

import "./Checkout.styles.scss";

const Checkout: FC = (): ReactElement => {
  const totalPrice = useSelector(selectors.user.selectTotalPrice);
  const cartItems = useSelector(selectors.user.getCartItems);

  if (cartItems.length > 0) {
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
        <div className="test-warning">
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </div>
        <StripeButton price={totalPrice} />
      </div>
    );
  }

  return <div className="checkout-page no-items">No items in cart.</div>;
};

export default Checkout;
