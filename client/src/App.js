import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home";

import Layout from "../src/Hoc/Layout";
import RegisterLogin from "../src/Components/Register_Login";
import Register from "./Components/Register";
import UserDashboard from "./Components/User/index";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={UserDashboard} />
        <Route
          path="/register"
          exact
          render={props => <Register {...props} />}
        />
        <Route path="/register_login" exact component={RegisterLogin} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default App;
