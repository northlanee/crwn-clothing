import React, { FC } from "react";

import "./Home.styles.scss";
import { Directory } from "components/Home";

const Home: FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Home;
