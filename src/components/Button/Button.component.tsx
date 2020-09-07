import React, { FC, ReactElement, ReactNode } from "react";
import cn from "classnames";

import "./Button.styles.scss";

type PropTypes = {
  children: ReactNode;
  type: "button" | "submit";
  googleSignIn?: true;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<PropTypes> = ({
  children,
  type,
  googleSignIn,
  ...otherProps
}): ReactElement => {
  return (
    <button
      className={cn("button", {
        "google-sign-in": googleSignIn,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
