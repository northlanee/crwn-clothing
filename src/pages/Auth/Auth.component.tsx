import React, { FC, ReactElement } from "react";

import { SignIn, SignUp } from "../../components";

import "./Auth.styles.scss";

const Auth: FC = (): ReactElement => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
