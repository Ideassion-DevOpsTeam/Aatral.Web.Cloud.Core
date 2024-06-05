import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// components
import Button from "../UI/Button";
import Navigation from "./Navigation/Navigation";
// assets
import { ReactComponent as AatralIcon } from "../../assets/Icons/aatral.svg";
import { ReactComponent as Hambuger } from "../../assets/Icons/hambuger.svg";
import { dropShowdowPaths } from "./Navigation/static_data";
// styles
import "./header.scss";
import ContactLogo from "../../assets/Images/contact_logo.svg";
import { imageBaseURL } from "../../api/API_URL";

function HeaderComponent() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <section
      className={`header ${
        dropShowdowPaths.includes(pathname) ? "showdow" : ""
      }`}
    >
      <Fragment>
        <section className="wid-90 m-x-auto header__inner-cont">
          <div className="header__logo-cont">
            <Link to="/">
              <AatralIcon />
            </Link>
          </div>
          <div className="header__details-cont">
            <label>Aatral - India</label>
            <Link to="/become-a-member">
              <Button optionalClasses="text-white">
                <p>Become a Member</p>
              </Button>
            </Link>
            <Hambuger onClick={() => setMenu(!menu)} />
            {menu ? <Navigation setMenu={setMenu} /> : null}
          </div>
        </section>
      </Fragment>
    </section>
  );
}

export default HeaderComponent;
