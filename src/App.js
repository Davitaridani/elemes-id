import React, { Fragment } from "react";
import NavbarCompt from "./components/layouts/navbar/NavbarCompt";
import Footer from "./components/layouts/footer/Footer";
import MainLayout from "./components/layouts/main/MainLayout";

const App = () => {
  return (
    <Fragment>
      <NavbarCompt />
      <MainLayout />
      <Footer />
    </Fragment>
  );
};

export default App;
