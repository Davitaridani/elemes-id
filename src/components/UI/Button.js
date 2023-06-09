import React from "react";

const Button = ({ content, style }) => {
  return (
    <>
      <button className={`btn text-white `}>{content}</button>
    </>
  );
};

export default Button;
