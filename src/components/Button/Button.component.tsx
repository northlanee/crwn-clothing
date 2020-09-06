import React, { FC, ReactElement, ReactNode } from "react";

import "./Button.styles.scss";

type PropTypes = {
  children: ReactNode;
  type: "button" | "submit";
};

const Button: FC<PropTypes> = ({
  children,
  type,
  ...otherProps
}): ReactElement => {
  return (
    <button className="button" type={type} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
