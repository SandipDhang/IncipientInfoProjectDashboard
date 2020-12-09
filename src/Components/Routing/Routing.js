import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../Login/login";
import Dashboard from "../Dashboard/dashboardView";
import User from "../Users/userApi";

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users" component={User} />
        </div>
      </BrowserRouter>
    );
  }
}
export default Routing;
