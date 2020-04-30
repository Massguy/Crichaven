import React, { Component } from "react";
import UserLayout from "../../Hoc/User";
import { getCartItems, removeCartItem } from "../../actions/user_actions";
import { connect } from "react-redux";
import UserProductBlock from "../../utils/User/product_block";
import { library } from "@fortawesome/fontawesome-svg-core";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faFrown, faSmile } from "@fortawesome/free-solid-svg-icons";
library.add(faFrown, faSmile);
class UserCart extends Component {
  state = {
    loading: true,
    total: 0,
    showSuccess: false,
    showTotal: false,
  };
  componentDidMount() {
    let cartItems = [];
    let user = this.props.user;
    if (user.userData.cart) {
      if (user.userData.cart.length > 0) {
        user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });
        this.props
          .dispatch(getCartItems(cartItems, user.userData.cart))
          .then(() => {
            if (this.props.user.cartDetail.length > 0) {
              this.calculateTotal(this.props.user.cartDetail);
            }
          });
      }
    }
  }
  calculateTotal = (cartDetail) => {
    let total = 0;
    cartDetail.forEach((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });
    this.setState({
      total,
      showTotal: true,
    });
  };
  removeFromCart = (id) => {
    this.props.dispatch(removeCartItem(id)).then(() => {
      console.log(this.props.user.cartDetail);
      if (this.props.user.cartDetail.length <= 0) {
        this.setState({
          showTotal: false,
        });
      } else {
        this.calculateTotal(this.props.user.cartDetail);
      }
    });
  };

  noItemMessage = () => (
    <div className="cart_no_items">
      <FontAwesomeIcon icon="frown" />
      <div>Your Cart Is Empty</div>
    </div>
  );
  render() {
    return (
      <UserLayout>
        <div>
          <h1>My Cart</h1>
          <div className="user_cart">
            <UserProductBlock
              products={this.props.user}
              type="cart"
              removeItem={(id) => this.removeFromCart(id)}
            />

            {this.state.showTotal ? (
              <div className="user_cart_sum">
                Total amount: £ {this.state.total}
              </div>
            ) : this.state.showSuccess ? (
              <div className="cart_success">
                <FontAwesomeIcon icon="smile" />
                <div>Thank you</div>
                <div>Order Complete</div>
              </div>
            ) : (
              this.noItemMessage()
            )}
          </div>
          {this.state.showTotal ? (
            <div className="paypal_button_container">Paypal </div>
          ) : null}
        </div>
      </UserLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserCart);
