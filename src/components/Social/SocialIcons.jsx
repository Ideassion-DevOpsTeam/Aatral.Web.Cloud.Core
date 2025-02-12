import React from "react";
import {
  mainFacebookIcon,
  mainLinkedInIcon,
  mainXIcon,
  mainInstagramIcon,
} from "../../constants/icons";
import Icon from "@ant-design/icons";

import { useLocation } from "react-router-dom";

import "./social.scss";

function SocialIconsComponent() {
  const location = useLocation();

  return (
    <section className="social-icon">
      <div className="social-icon__item-box">
        <a
          className={location.pathname === "/contact" ? "white-icon" : ""}
          href="https://www.facebook.com/profile.php?id=61560240031843"
          target="_blank"
          rel="noreferrer"
        >
          <Icon component={mainFacebookIcon} />
        </a>
      </div>
      <div className="social-icon__item-box">
        <a
          className={location.pathname === "/contact" ? "white-icon" : ""}
          href="https://www.linkedin.com/company/aatral-india/about/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon component={mainLinkedInIcon} />
        </a>
      </div>
      {/* <div className="social-icon__item-box">
        <a href="https://www.instagram.com/aatralindia" target="_blank" rel="noreferrer"><Icon component={mainInstagramIcon} /></a>
      </div> */}
      <div className="social-icon__item-box">
        <a
          className={location.pathname === "/contact" ? "white-icon" : ""}
          href="https://x.com/AatralIndia"
          target="_blank"
          rel="noreferrer"
        >
          <Icon component={mainXIcon} />
        </a>
      </div>
    </section>
  );
}

export default SocialIconsComponent;
