import React, { Component } from "react";
import HomeSlider from "../Home/Home_slider";
import HomePromotion from "./Main_Promition";
import { connect } from "react-redux";
import CardBlock from "../../utils/card_block";
import {
  getProductsBySell,
  getProductsByArrival,
} from "../../actions/products_actions";
class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
  }

  render() {
    return (
      <div>
        <HomeSlider />
        <CardBlock
          list={this.props.products.bySell}
          title="Best Selling Cricket Bats"
        />
        <HomePromotion />
        <CardBlock list={this.props.products.byArrival} title="New Arrivals" />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(Home);
