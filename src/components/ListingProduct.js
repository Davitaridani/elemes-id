import React from "react";
import Card from "./UI/Card";

const ListingProduct = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </>
  );
};

export default ListingProduct;
