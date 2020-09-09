import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../init/rootReducer";
import { CartIcon, CartModal } from "../index";

import { auth } from "../../firebase/firebase.utils";

import "./Header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header: FC<{}> = (): ReactElement => {
  const { currentUser } = useSelector(({ user }: AppState) => ({
    currentUser: user.currentUser,
  }));

  const [showCartModal, setShowCartModal] = React.useState<boolean>(false);

  const signOut = () => auth.signOut();

  const cartIconClickHandler = () => {
    setShowCartModal(!showCartModal);
  };

  const userJSX = currentUser ? (
    <div className="option" onClick={signOut}>
      Sign Out
    </div>
  ) : (
    <Link className="option" to="/auth">
      Sign In
    </Link>
  );

  const modalJSX = showCartModal ? <CartModal /> : null;

  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>
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
      {modalJSX}
    </div>
  );
};

export default Header;
