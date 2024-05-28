import React, { useEffect } from "react";

// store
import { aatral_name_section } from "./static_data";
import useAatralStore from "../../store/AatralPage/aatralStore";

// components
import SplitHeading from "../../components/SplitHeading/SplitHeading";

function AatralNameSection() {
  const { setNameSection, nameSection } = useAatralStore((state) => ({
    setNameSection: state.setNameSection,
    nameSection: state.nameSection,
  }));

  useEffect(() => {
    setNameSection();
  }, []);

  return (
    <section className="aatral__name-sec">
      <header>
        <SplitHeading
          heading_first={nameSection.heading_first}
          heading_last={nameSection.heading_last}
          optionalClasses={"heading-flex flex-start"}
        />
      </header>
      <main>
        <p>{nameSection.desc}</p>
      </main>
    </section>
  );
}

export default AatralNameSection;
