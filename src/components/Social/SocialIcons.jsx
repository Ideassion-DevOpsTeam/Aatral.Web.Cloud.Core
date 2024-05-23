import React from "react";
import { ReactComponent as Facebook } from "../../assets/Icons/Social/fb.svg";
import { ReactComponent as Insta } from "../../assets/Icons/Social/insta.svg";
import { ReactComponent as Linkdin } from "../../assets/Icons/Social/linkden.svg";
import { ReactComponent as Default } from "../../assets/Icons/Social/own.svg";

import "./social.scss";

function SocialIconsComponent() {
  return (
    <section className="social-icon">
      <div className="social-icon__item-box">
        <Facebook />
      </div>
      <div className="social-icon__item-box">
        <Insta />
      </div>
      <div className="social-icon__item-box">
        <Linkdin />
      </div>
      {/* <div className="social-icon__item-box">
        <Default />
      </div> */}
    </section>
  );
}

export default SocialIconsComponent;
