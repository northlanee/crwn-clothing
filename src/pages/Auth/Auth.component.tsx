import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectors } from "bus/selectors";

import { SignIn, SignUp } from "components";

import "./Auth.styles.scss";

const Auth: FC = (): ReactElement => {
  const currentUser = useSelector(selectors.user.getCurrentUser);

  const authJSX = !currentUser ? (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  ) : (
    <Redirect to="/" />
  );

  return authJSX;
};

export default Auth;
