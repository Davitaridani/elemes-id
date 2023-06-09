import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../UI/Button";
import iconBanner from "../../assets/img/icon-banner.png";

const Herro = () => {
  return (
    <section className="sect-herro-banner">
      <Container>
        <Row>
          <Col md="6" className="d-flex align-items-center">
            <div className="content-herro">
              <h1>
                Good Food Us <br /> Good Mood
              </h1>
              <p>
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </p>
              <div className="items-button flex align-items-center">
                <Button content="Daftar Sekarang" />
                <Button content="About Us" />
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="icon-herro">
              <img src={iconBanner} alt="icon-banner" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Herro;
