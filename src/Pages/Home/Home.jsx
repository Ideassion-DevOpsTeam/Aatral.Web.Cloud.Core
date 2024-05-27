import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//styles
import "./home.scss";
// components
import SocialIcons from "../../components/Social/SocialIcons";
import CustomButton from "../../components/CustomButtom/CustomBtm";
import NetworkDesign from "../../components/NetworkDesign/network";
import TypingEffect from "../../components/TypingEffect/TypingEffect";

// assets
import { ReactComponent as HomeBuilding } from "../../assets/Icons/Home/homeRightBuilding.svg";
import { ReactComponent as Map } from "../../assets/Icons/Home/indiaMap.svg";
import { ReactComponent as RightBlackArrow } from "../../assets/Icons/rightBlackArrow.svg";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // console.log("rerendering-home");

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <section className={`home fade-in-from-bottom ${isVisible ? "show" : ""}`}>
      <SocialIcons />
      <div className="home__map-box">
        <section className="wid-90">
          <div className="home__map-box__map-cont">
            <Map />
          </div>
          <div className="home__map-box__network-cont">
            <NetworkDesign />
          </div>
        </section>
      </div>
      <div className="home__desc-box">
        <div className="home__desc-box__desc-cont">
          <header>
            <h1>
              <span className="color-black">Enhance</span>
              <span className="color-yellow">Business Opportunities,</span>
              <span className="color-black">Unleash</span>
              <span className="color-yellow">Hidden Potential</span>
            </h1>
            <Link to="/details">
              <RightBlackArrow />
            </Link>
          </header>
          <main>
            <h1>Connecting People</h1>
            <h1>
              with
              <TypingEffect />
            </h1>
          </main>
          <footer>
            <CustomButton displayText="Know more about us" />
          </footer>
        </div>
        <div className="home__desc-box__icon-cont">
          <HomeBuilding />
        </div>
      </div>
    </section>
  );
}

export default Home;
