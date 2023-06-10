import React, { Fragment } from "react";
import Herro from "../../../components/sections/Herro";
import CarouselCard from "../../../components/sections/CarouselCard";
import Products from "../../../components/sections/Products";

const MainLayout = () => {
  return (
    <Fragment>
      <Herro />
      <CarouselCard />
      <Products />
    </Fragment>
  );
};

export default MainLayout;
