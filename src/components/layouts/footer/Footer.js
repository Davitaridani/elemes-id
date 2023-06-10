import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { linksFooter } from "../../../assets/constants/data";
import logoFooter from "../../../assets/img/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import Input from "../../UI/Input";

const Footer = () => {
  const iconContact = [
    { icon: <HiOutlineMail /> },
    { icon: <FiPhone /> },
    { icon: <AiOutlineInstagram /> },
  ];
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="5" className="block block__footer-address">
            <div className="footer__logo">
              <img src={logoFooter} alt="logo" />
            </div>
            <div className="block__footer-text">
              <p>
                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, <br />
                Kecamatan Setiabudi, Kota Jakarta Selatan, <br />
                Daerah Khusus Ibukota Jakarta 12950
              </p>
              <div className="d-flex  block__footer-icons">
                {iconContact?.map((item) => (
                  <div className="icon d-flex justify-content-center align-items-center">
                    <a href="#">{item.icon}</a>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          {linksFooter.map((item, index) => (
            <Col lg="2" sm="6" className="block__links">
              <div key={index} className="block__link-title">
                <h3>{item.title}</h3>
              </div>
              <ul className="block__items-links">
                {item.itemsLink.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item.link}</a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          <Col md="3" className="block__links">
            <div className="block__link-title">
              <h3>Newsletter</h3>
            </div>
            <div className="block__text-newsletter">
              <p>
                Get now free 50% discount for alll <br /> products on your first
                order
              </p>
            </div>
            <Input />
            <a href="#" className="block__links-contact">
              <p>
                <span>
                  <HiOutlineMail />
                </span>
                elemesid@gmail.com
              </p>
              <p>
                <span>
                  <FiPhone />
                </span>
                0888 1111 2222
              </p>
            </a>
          </Col>
        </Row>
        <div className="block__copyright text-center text-uppercase">
          <p>© 2021 Elemes id. All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
