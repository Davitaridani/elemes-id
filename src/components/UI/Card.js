import React, { useEffect } from "react";
import AOS from "aos";
import { Col } from "react-bootstrap";

const Card = ({ data }) => {
  const { title, imgUrl, category, bgColor, icon, delayAos } = data;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Col
        md="3"
        className="block block__card"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-offset="150"
        data-aos-delay={delayAos}
      >
        <div
          className="card border-0 card__product"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div class="card__header">
            <img src={imgUrl} alt="product" />
          </div>
          <div className="card__body">
            <h3>{title}</h3>
            <p>{category}</p>
            <div className="d-flex align-items-center card__body-icon">
              {icon.map((item, index) => (
                <div className="icon-star" key={index}>
                  <img src={item.star} alt="star" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Card;
