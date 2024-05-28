import React from "react";

//styles
import "./icons.scss";

function IconsComponent({ icons_cont_data }) {
  let iconSection = icons_cont_data.map((item, ind) => (
    <div key={ind} className="icon-cont">
      <section>
        {item.icon}
        <h3>{item.title}</h3>
      </section>
      {item.quote && <blockquote>{item.quote}</blockquote>}
    </div>
  ));
  return iconSection;
}

export default IconsComponent;
