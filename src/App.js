import React, { Fragment } from "react";
import NavbarCompt from "./components/layouts/navbar/NavbarCompt";
import Footer from "./components/layouts/footer/Footer";
import MainLayout from "./components/layouts/main/MainLayout";
import NavbarBottom from "./components/layouts/navbar/NavbarBottom";

const App = () => {
  return (
    <Fragment>
      <NavbarCompt />
      <MainLayout />
      <Footer />
      <NavbarBottom />
    </Fragment>
  );
};

export default App;
