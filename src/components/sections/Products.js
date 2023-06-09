import React from "react";
import { Container, Row } from "react-bootstrap";
import ListingProduct from "../ListingProduct";
import { dataProducts } from "../../assets/conctans/data";
import Button from "../UI/Button";

const Products = () => {
  console.log("Data Products", dataProducts);
  return (
    <section className="sect-producs">
      <Container>
        <div className="title">
          <h1>
            Browser Our Trending
            <br />
            <span>Receipt</span>
          </h1>
        </div>
        <Row>
          <ListingProduct data={dataProducts} />
          {/* <Button content="ALL Receipt" /> */}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
