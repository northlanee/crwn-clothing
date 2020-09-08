import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppState } from "../../init/rootReducer";

import { SignIn, SignUp } from "../../components";

import "./Auth.styles.scss";

const Auth: FC = (): ReactElement => {
  const { currentUser } = useSelector(({ user }: AppState) => ({
    currentUser: user.currentUser,
  }));

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
