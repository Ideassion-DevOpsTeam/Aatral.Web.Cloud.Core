import React, { useEffect } from "react";

// store
import { aatral_name_section } from "./static_data";
import useAatralStore from "../../store/AatralPage/aatralStore";

function AatralNameSection() {
  const { setNameSection, nameSection } = useAatralStore((state) => ({
    setNameSection: state.setNameSection,
    nameSection: state.nameSection,
  }));

  useEffect(() => {
    setNameSection();
  }, []);

  console.log("getNameSection", nameSection);

  return (
    <section className="aatral__name-sec">
      <header>
        <h1>
          <span className="color-black">{nameSection.heading_first}</span>
          <span className="color-yellow">{nameSection.heading_last}</span>
        </h1>
      </header>
      <main>
        <p>{nameSection.desc}</p>
      </main>
    </section>
  );
}

export default AatralNameSection;
