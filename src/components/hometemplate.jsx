import React, { Component } from "react";
import ProductCard from "./productscard";

class HomeTemplate extends Component {
  render() {
    return (
      <div className="home_container">
        <div className="advertise_card">
          <h3>Digitaastore</h3>
          <h1>We have it which you deserve!</h1>
        </div>
        <div className="home_product_card_container">
          <ProductCard laptops={this.props.laptops} />
        </div>
      </div>
    );
  }
}

export default HomeTemplate;
