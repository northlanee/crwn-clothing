import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import { auth, getUserProfileDocument } from "./firebase/firebase.utils";
import { User } from "firebase";
import { appUser } from "./types";

import { Home, Shop, Auth } from "./pages";
import { Header } from "./components";

import "./App.css";

const App: FC = () => {
  const [currentUser, setCurrentUser] = React.useState<appUser | null>(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: User | null) => {
      if (user) {
        const snapshot = await getUserProfileDocument(user);
        const userData = snapshot.data() as appUser;
        setCurrentUser(userData);
      } else setCurrentUser(null);
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
