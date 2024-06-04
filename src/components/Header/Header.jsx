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
  let classNameForHeader = location.pathname.slice(1);

  return (
    <section
      className={`header ${
        dropShowdowPaths.includes(pathname) ? "showdow" : ""
      }`}
    >
      {classNameForHeader === "contact" ? (
        <Fragment>
          <div className={classNameForHeader}>
            <div className={`contact_left ${classNameForHeader}`}></div>
            <div>
              <Link to="/">
                <img
                  className="contact__white_logo"
                  src={`${ContactLogo}`}
                  alt=""
                />
              </Link>
            </div>
            <div className="header__details-cont">
              <label>Aatral - India</label>
              <Button>
                <Link to="/become-a-member">Become a Member</Link>
              </Button>
              <Hambuger onClick={() => setMenu(!menu)} />
              {menu ? <Navigation setMenu={setMenu} /> : null}
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <section className="wid-90 m-x-auto header__inner-cont">
            <div className="header__logo-cont">
              <Link to="/">
                <AatralIcon />
              </Link>
            </div>
            <div className="header__details-cont">
              <label>Aatral - India</label>
              <Button>
                <Link to="/become-a-member">Become a Member</Link>
              </Button>
              <Hambuger onClick={() => setMenu(!menu)} />
              {menu ? <Navigation setMenu={setMenu} /> : null}
            </div>
          </section>
        </Fragment>
      )}
    </section>
  );
}

export default HeaderComponent;
