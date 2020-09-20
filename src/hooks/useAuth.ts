import React from "react";

import { useDispatch } from "react-redux";

import { actions } from "bus/actions";

import { auth } from "firebase/firebase.utils";
import { User } from "firebase";

type UseAuth = () => void;

export const useAuth: UseAuth = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: User | null) => {
      dispatch(actions.user.setUserAsync(user));
    });
    return () => unsubscribe();
  }, [dispatch]);
};
