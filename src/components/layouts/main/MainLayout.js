import React, { Fragment } from "react";
import Herro from "../../../components/sections/Herro";
import CarouselCategory from "../../../components/sections/CarouselCategory";
import Products from "../../../components/sections/Products";

const MainLayout = () => {
  return (
    <Fragment>
      <Herro />
      <CarouselCategory />
      <Products />
    </Fragment>
  );
};

export default MainLayout;
