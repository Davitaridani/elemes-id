import React from "react";

const Input = () => {
  return (
    <>
      <div className="input-group block__form-input">
        <input
          type="eamil"
          className="form-control bg-transparent"
          placeholder="Your email address"
        />
        <button className="input-group-text btn__input">SEND</button>
      </div>
    </>
  );
};

export default Input;
