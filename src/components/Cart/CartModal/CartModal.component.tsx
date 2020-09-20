import React, { FC, ReactElement } from "react";
import cn from "classnames";

import { Button } from "components/common";
import { CartItem } from "components/Cart";

import "./CartModal.styles.scss";
import { useCartModal } from "hooks";

type PropTypes = {
  show: boolean;
  closeCart: () => void;
};

const CartModal: FC<PropTypes> = React.memo(
  ({ show, closeCart }: PropTypes): ReactElement => {
    const [cartItems, checkoutRedirectHandler] = useCartModal(closeCart);

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
        <Button type="button" onClick={checkoutRedirectHandler}>
          GO TO CHECKOUT
        </Button>
      </div>
    );
  }
);

export default CartModal;
