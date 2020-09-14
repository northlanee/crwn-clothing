import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { actions } from "bus/actions";

import { auth } from "firebase/firebase.utils";
import { User } from "firebase";

import { Home, Shop, Auth, Checkout } from "pages";
import { Header } from "components/common";

import "./App.css";

const App: FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: User | null) => {
      dispatch(actions.user.setUserAsync(user));
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/auth" component={Auth} exact />
        <Route path="/checkout" component={Checkout} exact />
      </Switch>
    </div>
  );
};

export default App;
