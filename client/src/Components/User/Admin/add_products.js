import React, { Component } from "react";
import UserLayout from "../../../Hoc/User";
import FormField from "../../../utils/Form/FormField";
import {
  update,
  generateData,
  isFormValid,
  populateOptionFields,
  resetFields,
} from "../../../utils/Form/FormActions";
import { connect } from "react-redux";
import {
  getBrands,
  addProduct,
  clearProduct,
} from "../../../actions/products_actions";
import FileUpload from "../../../utils/Form/fileUpload.js";
class AddProduct extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Product name",
          name: "name_input",
          type: "text",
          placeholder: "Enter your name",
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      description: {
        element: "textarea",
        value: "",
        config: {
          label: "Product Description",
          name: "name_input",
          type: "text",
          placeholder: "Enter your description",
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      price: {
        element: "input",
        value: "",
        config: {
          label: "Product Price",
          name: "price_input",
          type: "number",
          placeholder: "Enter your price",
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      brand: {
        element: "select",
        value: "",
        config: {
          label: "Product Brand",
          name: "brands_input",
          options: [],
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      shipping: {
        element: "select",
        value: "",
        config: {
          label: "Product Shipping",
          name: "shipping_input",
          options: [
            { key: true, value: "Yes" },
            { key: false, value: "No" },
          ],
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      available: {
        element: "select",
        value: "",
        config: {
          label: "Available in_stock",
          name: "available",
          options: [
            { key: true, value: "Yes" },
            { key: false, value: "No" },
          ],
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      publish: {
        element: "select",
        value: "",
        config: {
          label: "Publish",
          name: "publish_input",
          options: [
            { key: true, value: "Publish" },
            { key: false, value: "Hidden" },
          ],
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      color: {
        element: "select",
        value: "",
        config: {
          label: "Color",
          name: "color_input",
          options: [
            { key: "Red", value: "Red" },
            { key: "Black", value: "Black" },
            { key: "Green", value: "Green" },
            { key: "Brown", value: "Brown" },
            { key: "other", value: "other" },
          ],
        },
        validation: { required: true },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      images: {
        value: [],
        validation: {
          required: false,
        },
        valid: true,
        touched: false,
        validationMessage: "",
        showlabel: false,
      },
    },
  };

  updateFields = (newFormData) => {
    this.setState({
      formData: newFormData,
    });
  };

  resetFieldHandler = () => {
    const newFormData = resetFields(this.state.formData);
    this.setState({
      formSuccess: true,
      formData: newFormData,
    });
    setTimeout(() => {
      this.setState(
        {
          formSuccess: false,
        },
        () => {
          this.props.dispatch(clearProduct());
        }
      );
    }, 3000);
  };
  submitForm = (event) => {
    event.preventDefault();

    let addProductData = generateData(this.state.formData, "products");

    let validForm = isFormValid(this.state.formData, "products");

    if (validForm) {
      this.props.dispatch(addProduct(addProductData)).then(() => {
        if (this.props.products.addProduct.success) {
          this.resetFieldHandler();
        } else {
          this.setState({ formError: true });
        }
      });
    } else {
      this.setState({ formError: true });
    }
  };
  updateForm = (elem) => {
    const newFormdata = update(elem, this.state.formData, "products");
    this.setState({
      formError: false,
      formData: newFormdata,
    });
  };

  componentDidMount() {
    const formData = this.state.formData;

    this.props.dispatch(getBrands()).then((response) => {
      const newFormData = populateOptionFields(
        formData,
        this.props.products.brands,
        "brand"
      );
      this.updateFields(newFormData);
    });
  }
  imagesHandler = (images) => {
    const newFormData = {
      ...this.state.formData,
    };
    newFormData["images"].value = images;
    newFormData["images"].valid = true;

    this.setState({
      formData: newFormData,
    });
  };
  render() {
    return (
      <UserLayout>
        <div>
          <h1>Add Product</h1>
          <form onSubmit={(event) => this.submitForm(event)}>
            <FileUpload
              imagesHandler={(images) => this.imagesHandler(images)}
              reset={this.state.formSuccess}
            />
            <FormField
              id={"name"}
              formData={this.state.formData.name}
              change={(elem) => this.updateForm(elem)}
            />
            <FormField
              id={"description"}
              formData={this.state.formData.description}
              change={(elem) => this.updateForm(elem)}
            />
            <FormField
              id={"price"}
              formData={this.state.formData.price}
              change={(elem) => this.updateForm(elem)}
            />
            <div className="form_divider"></div>
            <FormField
              id={"brand"}
              formData={this.state.formData.brand}
              change={(elem) => this.updateForm(elem)}
            />
            <FormField
              id={"shipping"}
              formData={this.state.formData.shipping}
              c
              change={(elem) => this.updateForm(elem)}
            />
            <FormField
              id={"available"}
              formData={this.state.formData.available}
              change={(elem) => this.updateForm(elem)}
            />
            <FormField
              id={"color"}
              formData={this.state.formData.color}
              change={(elem) => this.updateForm(elem)}
            />
            <div className="form_divider"></div>
            <FormField
              id={"publish"}
              formData={this.state.formData.publish}
              change={(elem) => this.updateForm(elem)}
            />
            {this.state.formSuccess ? (
              <div className="form_success">Success</div>
            ) : null}
            {this.state.formError ? (
              <div className="error_label">Make sure your data is correct</div>
            ) : null}
            <button onClick={(e) => this.submitForm(e)}>Add Product</button>
          </form>
        </div>
      </UserLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(AddProduct);
