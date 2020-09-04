import React, { FC } from "react";

import "./Home.scss";
import { Directory } from "./../../components";

const Home: FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Home;
