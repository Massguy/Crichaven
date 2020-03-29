import React from "react";
import MyButton from "../utils/Mybutton.js";
import Login from "./Login";

export default function RegisterLogin() {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>Sign Up to Crichaven</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              maiores, nemo dicta minima officia magni reprehenderit eligendi
              error neque accusantium harum doloribus dolor iste unde quod!
              Facere suscipit magni in.
            </p>
            <MyButton
              type="default"
              title="Create A New Account"
              linkTo="/register"
              addStyles={{
                margin: "20px 0 0 0"
              }}
            />
          </div>
          <div className="right">
            <h2>Registered Customers</h2>
            <p>already registered? Login here</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
