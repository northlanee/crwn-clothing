import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectors } from "bus/selectors";
import { CartItem } from "types";

type UseCartModal = (closeCart: () => void) => [CartItem[], () => void];

export const useCartModal: UseCartModal = (closeCart) => {
  const cartItems = useSelector(selectors.user.getCartItems);
  const history = useHistory();

  const checkoutRedirectHandler = React.useCallback(() => {
    closeCart();
    history.push("/checkout");
  }, [history, closeCart]);

  return [cartItems, checkoutRedirectHandler];
};
