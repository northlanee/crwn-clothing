import React, { FC, ReactElement } from "react";
import cn from "classnames";

import "./Spinner.styles.scss";

type PropTypes = {
  small?: boolean;
};

const Spinner: FC<PropTypes> = ({ small }: PropTypes): ReactElement => {
  return (
    <div className={cn("spinner-overlay", { small: small })}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
