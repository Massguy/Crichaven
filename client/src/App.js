import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Auth from "./Hoc/auth";
import Layout from "../src/Hoc/Layout";
import RegisterLogin from "../src/Components/Register_Login";
import Register from "./Components/Register";
import UserDashboard from "./Components/User/index";
import Shop from "./Components/Shop/index";
import SingleProduct from "./Components/Products";
import AddProduct from "./Components/User/Admin/add_products";
import UserCart from "./Components/User/cart";
import UpdateProfile from "./Components/User/update_profile";
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />

        <Route path="/user/cart" exact component={Auth(UserCart, true)} />
        <Route
          path="/user/user_profile"
          exact
          component={Auth(UpdateProfile, true)}
        />
        <Route
          path="/admin/add_product"
          exact
          component={Auth(AddProduct, true)}
        />
        <Route
          path="/register"
          exact
          render={(props) => Auth(<Register {...props} />, false)}
        />
        <Route
          path="/product_detail/:id"
          exact
          component={Auth(SingleProduct, null)}
        />
        <Route
          path="/register_login"
          exact
          component={Auth(RegisterLogin, false)}
        />
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />
      </Switch>
    </Layout>
  );
};

export default App;
