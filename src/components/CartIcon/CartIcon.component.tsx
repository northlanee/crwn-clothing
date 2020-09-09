import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import { selectors } from "../../bus/selectors";

import "./CartIcon.styles.scss";

import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

type PropTypes = {
  onCartIconClick: () => void;
};

const CartIcon: FC<PropTypes> = ({
  onCartIconClick,
}: PropTypes): ReactElement => {
  const totalCount = useSelector(selectors.cart.getCartItemsCount);

  return (
    <div className="cart-icon" onClick={onCartIconClick}>
      <Icon className="shopping-icon" />
      <span className="item-count">{totalCount}</span>
    </div>
  );
};

export default CartIcon;
