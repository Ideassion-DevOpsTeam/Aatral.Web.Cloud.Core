import React from "react";

import "./navigation.scss";
import { ReactComponent as RightArrowYellow } from "../../../assets/Icons/arrowYellowArrow.svg";
import { nav_menu, nav_footer_menu } from "./static_data";

function Navigation({ setMenu }) {
  return (
    <section className="navigation">
      <header>
        <section className="wid-80 m-x-auto">
          <RightArrowYellow onClick={() => setMenu(false)} />
        </section>
      </header>
      <main>
        <section className="wid-80 m-x-auto">
          <ul>
            {nav_menu.map((item, ind) => (
              <li key={ind}>{item.title}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <section className="wid-90 m-x-auto">
          <ul>
            {nav_footer_menu.map((item, ind) => (
              <li key={ind}>{item.title}</li>
            ))}
          </ul>
        </section>
      </footer>
    </section>
  );
}

export default Navigation;
