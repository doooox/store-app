import React from "react";
import { Switch, Route } from "react-router-dom";
import AddCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import Buy from "./pages/Buy";
import LatestPurchase from "./pages/LatestPurchase";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/customers">
        <AddCustomers />
      </Route>
      <Route exact path="/products">
        <AppProducts />
      </Route>
      <Route path="/customers/:id">
        <LatestPurchase />
      </Route>
      <Route exact path="/products/:id">
        <Buy />
      </Route>
    </Switch>
  );
};

export default Routes;
