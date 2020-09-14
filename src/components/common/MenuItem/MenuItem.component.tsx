import React, { FC } from "react";
import cn from "classnames";

import "./MenuItem.styles.scss";

type PropTypes = {
  title: string;
  imageUrl: string;
  large: boolean;
  routeName: string;
};

const MenuItem: FC<PropTypes> = ({
  title,
  imageUrl,
  large,
  routeName,
}: PropTypes) => {
  return (
    <div className={cn("menu-item", { large: large })}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
