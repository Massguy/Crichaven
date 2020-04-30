import React, { Component } from "react";
import FormField from "../../utils/Form/FormField";
import { connect } from "react-redux";
import {
  update,
  generateData,
  isFormValid,
  populateFields,
} from "../../utils/Form/FormActions";
import { updateUserData, clearUpdateUser } from "../../actions/user_actions";

class UpdatePersonalInfo extends Component {
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
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      lastName: {
        element: "input",
        value: "",
        config: {
          name: "lastname_input",
          type: "text",
          placeholder: "Enter your lastname",
        },
        validation: {
          required: true,
        },
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
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };

  updateForm = (elem) => {
    const newFormdata = update(elem, this.state.formData, "update_user");
    this.setState({
      formError: false,
      formData: newFormdata,
    });
  };

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formData, "update_user");
    let formIsValid = isFormValid(this.state.formData, "update_user");

    if (formIsValid) {
      this.props.dispatch(updateUserData(dataToSubmit)).then((response) => {
        if (response.payLoad) {
          this.setState(
            {
              formSuccess: true,
            },
            () => {
              setTimeout(() => {
                this.props.dispatch(clearUpdateUser());
                this.setState({
                  formSuccess: false,
                });
              }, 2000);
            }
          );
        }
      });
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  componentDidMount() {
    const newFormdata = populateFields(
      this.state.formData,
      this.props.user.userData
    );
    this.setState({
      formData: newFormdata,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.submitForm(event)}>
          <h2>Personal information</h2>
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
          <div>
            <FormField
              id={"email"}
              formData={this.state.formData.email}
              change={(elem) => this.updateForm(elem)}
            />
          </div>
          <div>
            {this.state.formSuccess ? (
              <div className="form_success">Success</div>
            ) : null}
            {this.state.formError ? (
              <div className="error_label">Please check your data</div>
            ) : null}
            <button onClick={(event) => this.submitForm(event)}>
              Update personal info
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(UpdatePersonalInfo);
