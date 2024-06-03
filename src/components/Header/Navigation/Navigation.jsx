import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";
import { ReactComponent as RightArrowYellow } from "../../../assets/Icons/arrowYellowArrow.svg";
import { nav_menu, nav_footer_menu } from "./static_data";

function Navigation({ setMenu }) {
  const menuRef = useRef(null);
  const handleClose = () => {
    setMenu(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section ref={menuRef} className="navigation">
      <header>
        <section className="wid-80 m-x-auto">
          <RightArrowYellow onClick={handleClose} />
        </section>
      </header>
      <main>
        <section className="wid-80 m-x-auto">
          <ul>
            {nav_menu.map((item, ind) => (
              <li key={ind} onClick={handleClose}>
                <Link to={item.path}>{item.title}</Link>
              </li>
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
        <section className="wid-90 m-x-auto">
          <label>
            Powered by{" "}
            <Link to="https://www.tamilrise.org/home" target="blank">
              THE RISE
            </Link>
            ©
          </label>
        </section>
      </footer>
    </section>
  );
}

export default Navigation;
