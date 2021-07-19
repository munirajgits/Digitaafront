import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./productsdetail";
import HomeTemplate from "./hometemplate";

class Routers extends Component {
  state = {
    laptops: [],
  };
  async componentDidMount() {
    const { data: laptops } = await axios.get("http://127.0.0.1:8000/api/list");
    this.setState({ laptops });
    // console.log(this.state.laptops, "api");
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/details/:id" component={ProductDetail} />
          <Route
            path="/"
            exact
            render={(props) => (
              <HomeTemplate laptops={this.state.laptops} {...props} />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routers;
