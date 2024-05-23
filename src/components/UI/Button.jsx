import React from "react";
import "./ui.scss";

const ButtonComponent = ({ cb, children, customClassess }) => {
  return (
    <button className={`component__button ${customClassess}`} onClick={cb}>
      {children}
    </button>
  );
};

export default ButtonComponent;
