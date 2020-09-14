import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import { useAuth } from "hooks";

import { Home, Shop, Auth, Checkout } from "pages";
import { Header } from "components/common";

import "./App.css";

const App: FC = () => {
  useAuth();

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth" component={Auth} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
