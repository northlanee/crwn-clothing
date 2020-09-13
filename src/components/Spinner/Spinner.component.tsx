import React, { FC, ReactElement } from "react";

import "./Spinner.styles.scss";

const Spinner: FC = (): ReactElement => {
  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
