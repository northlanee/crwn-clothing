import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectors } from "bus/selectors";
import { actions } from "bus/actions";
import { MenuItem, Spinner } from "components";

import "./Directory.styles.scss";

const Directory: FC = () => {
  const sections = useSelector(selectors.shop.getCollections);
  const isFetching = useSelector(selectors.shop.getFetching);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.shop.getCollectionsAsync());
  }, [dispatch]);

  if (isFetching) return <Spinner />;

  const menuItemsJSX = sections.map(({ id, ...otherProps }) => (
    <MenuItem key={id} {...otherProps} />
  ));

  return <div className="directory-menu">{menuItemsJSX}</div>;
};

export default Directory;
