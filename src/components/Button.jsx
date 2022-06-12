import React from "react";
import arrow from "../images/icon-arrow.svg";
import "./Button.css";

const Button = ({ onEmailSubmit }) => {
  return (
    <button className="btn-submit" onClick={onEmailSubmit}>
      <div className="overlay" />
      <img src={arrow} alt="icon arrow" />
    </button>
  );
};

export default Button;
