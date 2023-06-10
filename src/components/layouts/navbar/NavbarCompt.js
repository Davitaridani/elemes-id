import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import logo from "../../../assets/img/logo.png";
import { navLinks } from "../../../assets/constants/data";
import Button from "../../UI/Button";

const NavbarCompt = () => {
  const navRef = useRef(null);

  const stickyNav = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        navRef.current.classList.add("navbar-sticky");
      } else {
        navRef.current.classList.remove("navbar-sticky");
      }
    });
  };

  useEffect(() => {
    stickyNav();
    return () => window.removeEventListener("scroll", stickyNav);
  });

  return (
    <nav className="navbar navbar-expand-lg" ref={navRef}>
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
              <li className="nav__item" key={index}>
                <a className="nav__links d-flex" href="#">
                  {item.title}
                  <img src={item.badge} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="items__button-navbar d-flex align-items-center">
          <Button
            content="Masuk"
            style="bg-transparent text-dark d-none d-md-block"
          />
          <Button content="Daftar Sekarang" style="ms-2" />
        </div>
      </Container>
    </nav>
  );
};

export default NavbarCompt;
