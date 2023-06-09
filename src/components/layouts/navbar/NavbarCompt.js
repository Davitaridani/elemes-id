import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../../assets/img/logo.png";
import { navLinks } from "../../../assets/conctans/data";

const NavbarCompt = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <Container>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo-brand" />
        </a>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            {navLinks?.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href="#">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="items-button d-flex align-items-center">
          <a href="#" className="d-md-block d-sm-none">
            Masuk
          </a>
          <button>Daftar Sekarang</button>
        </div>
      </Container>
    </nav>
  );
};

export default NavbarCompt;
