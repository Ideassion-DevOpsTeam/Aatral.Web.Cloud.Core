import React from "react";

import "./splitHeading.scss";

function SplitHeading({ heading_first, heading_last, optionalClasses }) {
  return (
    <section
      className={`spit_heading ${optionalClasses ? optionalClasses : ""}`}
    >
      <h1 className="color-black spit_heading">{heading_first}</h1>
      <h1 className="color-yellow spit_heading">{heading_last}</h1>
    </section>
  );
}

export default SplitHeading;
