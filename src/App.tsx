import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./pages";

import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
};

export default App;
