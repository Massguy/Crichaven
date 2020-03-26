import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home";

import Layout from "../src/Hoc/Layout";
import RegisterLogin from "../src/Components/Register_Login";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register_login" exact component={RegisterLogin} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default App;
