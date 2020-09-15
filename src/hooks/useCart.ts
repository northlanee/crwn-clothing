import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "bus/selectors";

export const useCart = () => {
  const user = useSelector(selectors.user.getCurrentUser);
  console.log(user?.id);
};
