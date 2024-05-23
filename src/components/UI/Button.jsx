import React from "react";
import "./ui.scss";

const ButtonComponent = ({ onClick, children, optionalClasses }) => {
  return (
    <button
      className={`component__button ${optionalClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
