import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import { Home, Shop, Auth } from "./pages";
import { Header } from "./components";

import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/auth" component={Auth} exact />
      </Switch>
    </div>
  );
};

export default App;
