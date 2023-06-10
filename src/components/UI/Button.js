import React from "react";

const Button = ({ content, style }) => {
  return (
    <>
      <button className={`btn ${style} `}>{content}</button>
    </>
  );
};

export default Button;
