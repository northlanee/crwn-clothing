import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import { Home, Shop } from "./pages";

import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
      </Switch>
    </div>
  );
};

export default App;
