import React, { Component } from "react";
import PageTop from "../../utils/page_top";
import { connect } from "react-redux";
import {
  getSingleProduct,
  clearSingleProduct,
} from "../../actions/products_actions";
import ProdInfo from "./prodInfo";
import ProdImg from "./prodImg";
import { addToCart } from "../../actions/user_actions";
class SingleProduct extends Component {
  state = {};

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getSingleProduct(id));
  }
  componentWillUnmount() {
    this.props.dispatch(clearSingleProduct());
  }

  addToCartHandler(id) {
    this.props.dispatch(addToCart(id));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <PageTop title="Product detail" />
        <div className="container">
          {this.props.products.prodDetail ? (
            <div className="product_detail_wrapper">
              <div className="left">
                <div style={{ width: "500px" }}>
                  <ProdImg detail={this.props.products.prodDetail} />
                </div>
              </div>
              <div className="right">
                <ProdInfo
                  addToCart={(id) => this.addToCartHandler(id)}
                  detail={this.props.products.prodDetail}
                />
              </div>
            </div>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(SingleProduct);
