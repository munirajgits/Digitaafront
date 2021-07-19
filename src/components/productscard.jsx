import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  render() {
    // console.log(this.state.laptops);
    return (
      <div className="product_row">
        {this.props.laptops.map((laptop) => (
          <Link to={`/details/${laptop.id}`} key={laptop.id}>
            <Card className="product_home_card">
              <div className="image_container">
                <img src={laptop.pics} alt={laptop.name} />
              </div>
              <ListGroup>
                <ListGroupItem>{laptop.name}</ListGroupItem>
                <ListGroupItem>{laptop.price}</ListGroupItem>
                <ListGroupItem>{laptop.processor}</ListGroupItem>
              </ListGroup>
            </Card>
          </Link>
        ))}
      </div>
    );
  }
}

export default ProductCard;
