import React from "react";
import { Col } from "react-bootstrap";

const Card = ({ data }) => {
  const { title, imgUrl, category, bgColor, icon } = data;
  return (
    <>
      <Col md="3">
        <div className="" style={{ backgroundColor: `${bgColor}` }}>
          <img src={imgUrl} alt="product" />
          <div className="card-body">
            <h3>{title}</h3>
            <p>{category}</p>
            <div className="d-flex align-items-center">
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
