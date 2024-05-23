import React from "react";
import "./ui.scss";

const ImageComponent = ({ cb, title, customClassess, src }) => {
  return (
    <img
      src={src}
      className={`component__img ${customClassess}`}
      alt={title}
      onClick={cb}
    />
  );
};

export default ImageComponent;
