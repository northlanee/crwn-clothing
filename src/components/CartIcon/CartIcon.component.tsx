import React, { FC, ReactElement } from "react";

import "./CartIcon.styles.scss";

import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

type PropTypes = {
  onCartIconClick: () => void;
};

const CartIcon: FC<PropTypes> = ({
  onCartIconClick,
}: PropTypes): ReactElement => {
  return (
    <div className="cart-icon" onClick={onCartIconClick}>
      <Icon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
