import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Auth from "./Hoc/auth";
import Layout from "../src/Hoc/Layout";
import RegisterLogin from "../src/Components/Register_Login";
import Register from "./Components/Register";
import UserDashboard from "./Components/User/index";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />
        <Route
          path="/register"
          exact
          render={props => Auth(<Register {...props} />, false)}
        />
        <Route
          path="/register_login"
          exact
          component={Auth(RegisterLogin, false)}
        />
        <Route path="/" exact component={Auth(Home, null)} />
      </Switch>
    </Layout>
  );
};

export default App;
