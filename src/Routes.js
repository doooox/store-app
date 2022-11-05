import React from "react";
import { Switch, Route } from "react-router-dom";
import AddCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import LatestPurchase from "./pages/LatestPurchase";

const Routes = () => {
  return (
    <Switch>
    <Route exact path="/customers">
      <AddCustomers />
    </Route>
    <Route path="/products">
      <AppProducts />
    </Route>
    <Route path="/customers/:id">
      <LatestPurchase />
    </Route>
  </Switch>
  );
};

export default Routes;
