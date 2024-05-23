import React from "react";

// assets
import { ReactComponent as AatralStepsImage } from "../../assets/Icons/Aatral/aatralOneImage.svg";
import { aatral_top_sec_icons_cont } from "./static_data";
import useAatralStore from "../../store/AatralPage/aatralStore";

function AatralTopSection() {
  const { aatral_top_sec_desc_cont } = useAatralStore((state) => ({
    aatral_top_sec_desc_cont: state.aatral_top_sec_desc_cont,
  }));

  console.log("aatral_top_sec_desc_cont", aatral_top_sec_desc_cont);
  let headingSection = (
    <header>
      <h1 className="color-black">{aatral_top_sec_desc_cont.heading_first}</h1>
      <h1 className="color-yellow">{aatral_top_sec_desc_cont.heading_last}</h1>
    </header>
  );

  let descSection = (
    <main>
      <p>{aatral_top_sec_desc_cont.desc}</p>
    </main>
  );

  let iconSection = aatral_top_sec_icons_cont.map((item, ind) => (
    <div key={ind} className="aatral__top-sec__desc-box__icon-cont">
      <section>
        {item.icon}
        <h3>{item.title}</h3>
      </section>
      <blockquote>{item.quote}</blockquote>
    </div>
  ));
  return (
    <section className="aatral__top-sec">
      <div className="aatral__top-sec__desc-box">
        {headingSection}
        {descSection}
        <footer>{iconSection}</footer>
      </div>
      <div className="aatral__top-sec__img-box">
        <AatralStepsImage />
      </div>
    </section>
  );
}

export default AatralTopSection;
