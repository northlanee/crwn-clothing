import React, { FC, ReactElement, ReactNode } from "react";
import cn from "classnames";

import { Spinner } from "components/common";

import "./Button.styles.scss";

type PropTypes = {
  children: ReactNode;
  type: "button" | "submit";
  googleSignIn?: true;
  inverted?: true;
  loading?: true;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<PropTypes> = React.memo(
  ({
    children,
    type,
    googleSignIn,
    inverted,
    loading,
    ...otherProps
  }): ReactElement => {
    return (
      <button
        className={cn("button", {
          "google-sign-in": googleSignIn,
          blocked: loading,
          inverted: inverted,
        })}
        type={type}
        {...otherProps}
      >
        {loading ? <Spinner small /> : children}
      </button>
    );
  }
);
export default Button;
