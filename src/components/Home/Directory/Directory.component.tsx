import React, { FC } from "react";

import { MenuItem } from "components/Home";
import { Spinner } from "components/common";
import { useCollections } from "hooks";

import "./Directory.styles.scss";

const Directory: FC = () => {
  const [sections, isFetching] = useCollections();

  if (isFetching) return <Spinner />;

  const menuItemsJSX = sections.map(({ id, ...otherProps }) => (
    <MenuItem key={id} {...otherProps} />
  ));

  return <div className="directory-menu">{menuItemsJSX}</div>;
};

export default Directory;
