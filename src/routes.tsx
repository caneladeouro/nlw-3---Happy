import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphangesMap from "./pages/OrphangesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/app" component={OrphangesMap}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
