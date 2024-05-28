import React from "react";
import  { mainFacebookIcon, mainLinkedInIcon, mainXIcon }  from "../../constants/icons";
import Icon from '@ant-design/icons';

import "./social.scss";

function SocialIconsComponent() {
  return (
    <section className="social-icon">
      <div className="social-icon__item-box">
        <a href="https://www.facebook.com/profile.php?id=61560240031843" target="_blank" rel="noreferrer"><Icon component={mainFacebookIcon} /></a>
      </div>
      <div className="social-icon__item-box">
        <a href="https://www.linkedin.com/company/aatral-india/about/" target="_blank" rel="noreferrer"><Icon component={mainLinkedInIcon} /></a>
      </div>
      <div className="social-icon__item-box">
        <a href="https://x.com/AatralIndia" target="_blank" rel="noreferrer"><Icon component={mainXIcon} /></a>
      </div>
    </section>
  );
}

export default SocialIconsComponent;
