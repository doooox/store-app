import React from "react";
import { Switch, Route } from "react-router-dom";
import AddCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";

const Routes = () => {
  return (
    <Switch>
    <Route path="/customers">
      <AddCustomers />
    </Route>
    <Route path="/products">
      <AppProducts />
    </Route>
  </Switch>
  );
};

export default Routes;
