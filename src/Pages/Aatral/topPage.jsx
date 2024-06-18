import React from "react";

// assets
import { ReactComponent as AatralStepsImage } from "../../assets/Icons/Aatral/aatralOneImage.svg";
import { aatral_top_sec_icons_cont } from "./static_data";
import useAatralStore from "../../store/AatralPage/aatralStore";

// components
import IconsComponent from "../../components/IconsComponents/IconsComponent";
import SplitHeading from "../../components/SplitHeading/SplitHeading";

function AatralTopSection({Description}) {
  const { aatral_top_sec_desc_cont } = useAatralStore((state) => ({
    aatral_top_sec_desc_cont: state.aatral_top_sec_desc_cont,
  }));

  let headingSection = (
    <header>
      <SplitHeading
        heading_first={aatral_top_sec_desc_cont.heading_first}
        heading_last={aatral_top_sec_desc_cont.heading_last}
      />
    </header>
  );

  let descSection = (
    <main>
      <p>{ Description }</p>
    </main>
  );

  return (
    <section className="aatral__top-sec">
      <div className="aatral__top-sec__desc-box">
        {headingSection}
        {descSection}
        <footer>
          <IconsComponent icons_cont_data={aatral_top_sec_icons_cont} />
        </footer>
      </div>
      <div className="aatral__top-sec__img-box">
        <AatralStepsImage />
      </div>
    </section>
  );
}

export default AatralTopSection;
