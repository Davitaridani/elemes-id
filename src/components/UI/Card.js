import React from "react";
import { Col } from "react-bootstrap";

const Card = ({ data }) => {
  const { title, imgUrl, category, bgColor, icon } = data;

  return (
    <>
      <Col md="3" className="block block__card">
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
                  <span>{item}</span>
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
