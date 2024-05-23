import React, { useState } from "react";

// components
import Button from "../UI/Button";
import Navigation from "./Navigation/Navigation";
// assets
import { ReactComponent as AatralIcon } from "../../assets/Icons/aatral.svg";
import { ReactComponent as Hambuger } from "../../assets/Icons/hambuger.svg";
// styles
import "./header.scss";
//

function HeaderComponent() {
  const [menu, setMenu] = useState(false);
  return (
    <section className="header">
      <section className="wid-90 m-x-auto header__inner-cont">
        <div className="header__logo-cont">
          <AatralIcon />
        </div>
        <div className="header__details-cont">
          <label>Aatral - India</label>
          <Button>
            <p>Become a Member</p>
          </Button>
          <Hambuger onClick={() => setMenu(!menu)} />
          {menu ? <Navigation setMenu={setMenu} /> : null}
        </div>
      </section>
    </section>
  );
}

export default HeaderComponent;
