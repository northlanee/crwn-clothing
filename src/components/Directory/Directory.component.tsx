import React, { FC } from "react";

import { MenuItem } from "../index";

import "./Directory.styles.scss";

type Section = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  large: boolean;
};

const sectionsData: Section[] = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
    large: false,
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
    large: false,
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
    large: false,
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    id: 4,
    linkUrl: "shop/womens",
    large: true,
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    id: 5,
    linkUrl: "shop/mens",
    large: true,
  },
];

const Directory: FC = () => {
  const menuItemsJSX = sectionsData.map(({ id, ...otherProps }) => (
    <MenuItem {...otherProps} />
  ));

  return <div className="directory-menu">{menuItemsJSX}</div>;
};

export default Directory;
