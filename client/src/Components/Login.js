import React, { Component } from "react";
import FormField from "../utils/Form/FormField";
import { update, generateData, isFormValid } from "../utils/Form/FormActions";
import { loginUser } from ".././actions/user_actions";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
class Login extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: { required: true, email: true },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = elem => {
    const newFormData = update(elem, this.state.formData, "login");
    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  submitForm = event => {
    event.preventDefault();

    let loginData = generateData(this.state.formData, "login");

    let validForm = isFormValid(this.state.formData, "login");
    if (validForm) {
      this.props.dispatch(loginUser(loginData)).then(response => {
        if (response.payLoad.loginSuccess) {
          this.props.history.push("/user/dashboard");
        } else {
          this.setState({ formError: true });
        }
      });
    } else {
      this.setState({ formError: true });
    }
  };
  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={e => this.submitForm(e)}>
          <FormField
            id={"email"}
            formData={this.state.formData.email}
            change={elem => this.updateForm(elem)}
          />
          <FormField
            id={"password"}
            formData={this.state.formData.password}
            change={elem => this.updateForm(elem)}
          />
          {this.state.formError ? (
            <div className="error_label">Make sure your data is correct</div>
          ) : null}
          <button onClick={e => this.submitForm(e)}>Login</button>
        </form>
      </div>
    );
  }
}

export default connect()(withRouter(Login));
