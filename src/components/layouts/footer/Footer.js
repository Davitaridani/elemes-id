import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { linksFooter } from "../../../assets/conctans/data";
import logoFooter from "../../../assets/img/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

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
          <Col md="4">
            <img src={logoFooter} alt="logo" />
            <p>
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>
            <div className="d-flex align-items-center">
              {iconContact?.map((item) => (
                <div className="icon">
                  <span>{item.icon}</span>
                </div>
              ))}
            </div>
          </Col>
          {linksFooter.map((item, index) => (
            <Col lg="2" sm="6" className="item-link" key={index}>
              <div>
                <h3>{item.title}</h3>
                {item.itemsLink.map((item, index) => (
                  <ul key={index}>
                    <li>
                      <a href="#">{item.link}</a>
                    </li>
                  </ul>
                ))}
              </div>
            </Col>
          ))}
          <Col md="4">
            <h3>Newsletter</h3>
            <p>
              Get now free 50% discount for alll products on your first order
            </p>
            <input type="email" placeholder="Your email address" />
            <a href="#" className="item-contacts">
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
        <div className="text-copyright text-center">
          <p>© 2021 Elemes id. All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
