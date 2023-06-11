import React from "react";

const Button = ({ content, styling }) => {
  return (
    <>
      <button className={`btn ${styling} `}>{content}</button>
    </>
  );
};

export default Button;
