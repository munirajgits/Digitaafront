import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from "react-bootstrap/esm/ListGroup";
// import ProductCard from "./components/productcard";
// import Store from "./components/laptopStore";
// import Card from "./components/lapcard";
// import Card from "react-bootstrap/esm/Card";

class App extends Component {
  state = {
    laptops: [],
  };
  async componentDidMount() {
    const { data: laptops } = await axios.get("http://127.0.0.1:8000/api/list");
    this.setState({ laptops });
    // console.log(this.state.laptops, "api");
  }
  render() {
    // console.log(this.state.laptops);
    return (
      <div className="product_detail_card">
        {this.state.laptops.map((laptop) => (
          <React.Fragment>
            <Card key={laptop.id}>
              <img src={laptop.pics} alt={laptop.name} />
            </Card>
            <Card key={laptop.id}>
              <ListGroup>
                <ListGroupItem>{laptop.name}</ListGroupItem>
                <ListGroupItem>{laptop.price}</ListGroupItem>
                <ListGroupItem>{laptop.processor}</ListGroupItem>
                <ListGroupItem>{laptop.memory}</ListGroupItem>
                <ListGroupItem>{laptop.storage}</ListGroupItem>
                <ListGroupItem>{laptop.camera}</ListGroupItem>
                <ListGroupItem>{laptop.display}</ListGroupItem>
              </ListGroup>
            </Card>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default App;
