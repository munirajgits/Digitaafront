import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";

class ProductDetail extends Component {
  state = {
    laptop: {},
  };
  async componentDidMount() {
    const { data: laptop } = await axios.get(
      `https://muni-portfolio.herokuapp.com/api/get/${this.props.match.params.id}/`
    );
    this.setState({ laptop });
  }

  render() {
    const { price, name, pics, processor, memory, storage, camera, display } =
      this.state.laptop;

    return (
      <div className="detail_page_background">
        <div className="detail_page">
          <div className="product_detail_card">
            <Card className="img-background">
              <img className="detail-img" src={pics} alt={name} />
            </Card>
            <Card className="details">
              <ListGroup>
                <ListGroupItem className="detail-item">
                  Name : {name}
                </ListGroupItem>
                <ListGroupItem className="detail-item">
                  Price Rs. : {price}
                </ListGroupItem>
                <ListGroupItem className="detail-item">
                  Processor : {processor}
                </ListGroupItem>
                <ListGroupItem className="detail-item">
                  Memory : {memory}
                </ListGroupItem>
                <ListGroupItem className="detail-item">
                  Storage : {storage}
                </ListGroupItem>
                <ListGroupItem className="detail-item">
                  Camera : {camera}
                </ListGroupItem>
                <ListGroupItem className="detail-item">
                  Display : {display}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
