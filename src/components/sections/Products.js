import React from "react";
import { Container, Row } from "react-bootstrap";
import ListingProduct from "../ListingProduct";
import { dataProducts } from "../../assets/constants/data";
import Button from "../UI/Button";

const Products = () => {
  return (
    <section className="sect__products">
      <Container>
        <div className="title__product">
          <h1>
            Browser Our Trending
            <br />
            <span>Receipt</span>
          </h1>
        </div>
        <Row>
          <ListingProduct data={dataProducts} />
          <Button content="ALL Receipt" style="mx-auto" />
        </Row>
      </Container>
    </section>
  );
};

export default Products;
