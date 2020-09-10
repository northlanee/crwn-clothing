import React, { FC } from "react";
import { useSelector } from "react-redux";

import { selectors } from "bus/selectors";
import { MenuItem } from "components";

import "./Directory.styles.scss";

const Directory: FC = () => {
  const sections = useSelector(selectors.directory.getSections);

  const menuItemsJSX = sections.map(({ id, ...otherProps }) => (
    <MenuItem key={id} {...otherProps} />
  ));

  return <div className="directory-menu">{menuItemsJSX}</div>;
};

export default Directory;
