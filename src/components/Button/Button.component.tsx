import React, { FC, ReactElement, ReactNode } from "react";
import cn from "classnames";

import "./Button.styles.scss";

type PropTypes = {
  children: ReactNode;
  type: "button" | "submit";
  googleSignIn?: true;
  inverted?: true;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<PropTypes> = ({
  children,
  type,
  googleSignIn,
  inverted,
  ...otherProps
}): ReactElement => {
  return (
    <button
      className={cn("button", {
        "google-sign-in": googleSignIn,
        inverted: inverted,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
