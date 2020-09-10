import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { actions } from "bus/actions";

import { auth, getUserProfileDocument } from "firebase/firebase.utils";
import { User } from "firebase";
import { appUser } from "types";

<<<<<<< HEAD
import { Home, Shop, Auth } from "pages";
import { Header } from "components";
=======
import { Home, Shop, Auth, Checkout } from "./pages";
import { Header } from "./components";
>>>>>>> b5095924d1b2940e13da695662313539d7be2b1e

import "./App.css";

const App: FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: User | null) => {
      if (user) {
        const snapshot = await getUserProfileDocument(user);
        const userData = snapshot.data() as appUser;
        dispatch(actions.user.setCurrentUser(userData));
      } else dispatch(actions.user.setCurrentUser(null));
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/auth" component={Auth} exact />
        <Route path="/checkout" component={Checkout} exact />
      </Switch>
    </div>
  );
};

export default App;
