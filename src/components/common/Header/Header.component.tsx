import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectors } from "bus/selectors";
import { actions } from "bus/actions";
import { Spinner } from "components/common";
import { CartIcon, CartModal } from "components/Cart";

import { auth } from "firebase/firebase.utils";

import "./Header.styles.scss";

import { ReactComponent as Logo } from "assets/crown.svg";

const Header: FC<{}> = (): ReactElement => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectors.user.getCurrentUser);
  const isFetching = useSelector(selectors.user.getIsFetching);

  const [showCartModal, setShowCartModal] = React.useState<boolean>(false);

  const signOut = () => {
    dispatch(actions.user.setCart([]));
    auth.signOut();
  };
  const cartIconClickHandler = () => setShowCartModal(!showCartModal);
  const closeCartHandler = () => setShowCartModal(false);

  const userJSX = currentUser ? (
    <div className="option" onClick={signOut}>
      Sign Out
    </div>
  ) : (
    <Link className="option" to="/auth">
      Sign In
    </Link>
  );

  const headerJSX = (
    <>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {userJSX}
        <CartIcon onCartIconClick={cartIconClickHandler} />
      </div>
      <CartModal show={showCartModal} closeCart={closeCartHandler} />
    </>
  );

  return (
    <div className="header-wrapper">
      <div className="header">
        <Link to="/">
          <Logo className="logo-container" />
        </Link>
        {isFetching ? <Spinner small /> : headerJSX}
      </div>
    </div>
  );
};

export default Header;
