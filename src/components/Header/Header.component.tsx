import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { User } from "firebase";

import { auth } from "../../firebase/firebase.utils";

import "./Header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

type PropTypes = {
  currentUser: User | null;
};

const Header: FC<PropTypes> = ({ currentUser }: PropTypes): ReactElement => {
  const signOut = () => auth.signOut();

  const userJSX = currentUser ? (
    <div className="option" onClick={signOut}>
      Sign Out
    </div>
  ) : (
    <Link className="option" to="/auth">
      Sign In
    </Link>
  );

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
      </div>
    </div>
  );
};

export default Header;
