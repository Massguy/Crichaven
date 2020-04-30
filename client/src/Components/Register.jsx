import React, { Component } from "react";
import FormField from "../utils/Form/FormField";
import { update, generateData, isFormValid } from "../utils/Form/FormActions";
import { connect } from "react-redux";
import { registerUser } from "../actions/user_actions";
import Dialog from "@material-ui/core/Dialog";

class Register extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formData: {
      firstName: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your name",
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      lastName: {
        element: "input",
        value: "",
        config: {
          name: "lastName_input",
          type: "text",
          placeholder: "Enter your lastName",
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email",
        },
        validation: { required: true, email: true },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password",
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      confirmPassword: {
        element: "input",
        value: "",
        config: {
          name: "confirm_password_input",
          type: "password",
          placeholder: "Confirm Your Password",
        },
        validation: { required: true, confirm: "password" },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };

  submitForm = (event) => {
    event.preventDefault();

    let registerData = generateData(this.state.formData, "register");

    let validForm = isFormValid(this.state.formData, "register");

    if (validForm) {
      this.props
        .dispatch(registerUser(registerData))
        .then((response) => {
          if (response.payLoad.success) {
            this.setState({
              formError: false,
              formSuccess: true,
            });
            setTimeout(() => {
              this.props.history.push("/register_login");
            }, 3000);
          } else {
            this.setState({ formError: true });
          }
        })
        .catch((e) => {
          this.setState({ formError: true });
        });
    } else {
      this.setState({ formError: true });
    }
  };
  updateForm = (elem) => {
    const newFormdata = update(elem, this.state.formData, "register");
    this.setState({
      formError: false,
      formData: newFormdata,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <form onSubmit={(event) => this.submitForm(event)}>
                <h2>Fill In Your Details</h2>
                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id={"firstName"}
                      formData={this.state.formData.firstName}
                      change={(elem) => this.updateForm(elem)}
                    />
                  </div>
                  <div className="block">
                    <FormField
                      id={"lastName"}
                      formData={this.state.formData.lastName}
                      change={(elem) => this.updateForm(elem)}
                    />
                  </div>
                </div>
                <div className="block">
                  <FormField
                    id={"email"}
                    formData={this.state.formData.email}
                    change={(elem) => this.updateForm(elem)}
                  />
                </div>
                <h2>Verify Password</h2>
                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id={"password"}
                      formData={this.state.formData.password}
                      change={(elem) => this.updateForm(elem)}
                    />
                  </div>
                  <div className="block">
                    <FormField
                      id={"confirmPassword"}
                      formData={this.state.formData.confirmPassword}
                      change={(elem) => this.updateForm(elem)}
                    />
                  </div>
                </div>
                <div>
                  {this.state.formError ? (
                    <div className="error_label">
                      Make sure your data is correct
                    </div>
                  ) : null}
                  <button onClick={(e) => this.submitForm(e)}>
                    Create An Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Dialog open={this.state.formSuccess}>
          <div className="dialog_alert">
            <div>Congratulations</div>
            <div>You will be redirected to the Login page soon...</div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default connect()(Register);
