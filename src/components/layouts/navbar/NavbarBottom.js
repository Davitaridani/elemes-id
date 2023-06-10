import React from "react";
import { Container } from "react-bootstrap";
import { dataListHamburger } from "../../../assets/constants/data";

const NavbarBottom = () => {
  return (
    <section className="sect__navbar-footer d-block d-md-none">
      <Container>
        <div class="d-flex justify-content-between">
          {dataListHamburger?.map((item, index) => (
            <div className="items__hamburger " key={index}>
              <button className="border-0  bg-transparent">
                <img src={item.imgUrl} alt="icon-hamburger" />
                <p>{item.title}</p>
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NavbarBottom;
