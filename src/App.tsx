import React, { FC, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { useAuth } from "hooks";

import { Home } from "pages";
import { Header, Spinner } from "components/common";

import "./App.css";

const Auth = React.lazy(() => import("./pages/Auth/Auth.component"));
const Checkout = React.lazy(
  () => import("./pages/Checkout/Checkout.component")
);
const Shop = React.lazy(() => import("./pages/Shop/Shop.component"));

const App: FC = () => {
  useAuth();

  const authRender = () => (
    <Suspense fallback={<Spinner />}>
      <Auth />
    </Suspense>
  );

  const checkoutRender = () => (
    <Suspense fallback={<Spinner />}>
      <Checkout />
    </Suspense>
  );

  const shopRender = () => (
    <Suspense fallback={<Spinner />}>
      <Shop />
    </Suspense>
  );

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth" render={authRender} exact />
        <Route path="/checkout" render={checkoutRender} exact />
        <Route path="/shop" render={shopRender} />
      </Switch>
    </div>
  );
};

export default App;
