import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import Button from "../UI/Button";
import imageBanner from "../../assets/img/images-banner.png";
import imageBannerMobile from "../../assets/img/images-banner-mobile.png";

const Herro = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="sect__hero">
      <Container>
        <Row>
          <Col md="6" className="d-flex align-items-center">
            <div className="block__content-hero">
              <div class="title__hero">
                <h1>
                  <Typewriter
                    options={{
                      strings: [" Good Food Us Good Mood"],
                      autoStart: true,
                      loop: true,
                      pauseFor: 3000,
                      delay: 150,
                    }}
                  />
                </h1>
              </div>
              <div class="description__hero">
                <img
                  src={imageBannerMobile}
                  alt="imgaes-herro"
                  className="img-fluid d-block d-md-none"
                  data-aos="zoom-in"
                  data-aos-duration="2500"
                />
                <p>
                  I would think that conserving our natural resources should be
                  a conservative position: Not to waste food, and not to throw
                  away a lot of the food that we buy.
                </p>
              </div>
              <div className="items__button-hero d-flex align-items-center gap-3">
                <Button content="Daftar Sekarang" />
                <Button content="About Us" />
              </div>
            </div>
          </Col>
          <Col md="6">
            <div
              className="images__hero"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <img
                src={imageBanner}
                alt="images-hero"
                className="img-fluid d-none d-md-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Herro;
