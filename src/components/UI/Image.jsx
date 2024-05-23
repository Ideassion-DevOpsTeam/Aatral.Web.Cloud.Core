import React from "react";
import "./ui.scss";

const ImageComponent = ({ onClick, title, optionalClasses, src }) => {
  return (
    <img
      src={src}
      className={`component__img ${optionalClasses}`}
      alt={title}
      onClick={onClick}
    />
  );
};

export default ImageComponent;
