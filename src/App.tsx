import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { User } from "firebase";

import { Home, Shop, Auth } from "./pages";
import { Header } from "./components";

import { auth } from "./firebase/firebase.utils";

import "./App.css";

const App: FC = () => {
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/auth" component={Auth} exact />
      </Switch>
    </div>
  );
};

export default App;
