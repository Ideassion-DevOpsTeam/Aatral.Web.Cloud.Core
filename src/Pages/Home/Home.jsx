import React, { useState, useEffect, Fragment } from "react";
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
import RiseLogo from '../../assets/Images/rise_logo.svg';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <Fragment>
      <section
        className={`home fade-in-from-bottom ${isVisible ? "show" : ""}`}
      >
        <SocialIcons />
        <div className="home__map-box">
          <section className="wid-80">
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
            <div>
              <p className="home__desc-box__desc-cont-Powered__by">Powered by
                <img className="home__desc-box__desc-cont-Powered__by-img" src={`${RiseLogo}`} alt="" />
              </p>
            </div>
            <header>
              <h1>
                <span className="color-black">Enhance</span>
                <span className="color-yellow">Business Opportunities,</span>
                <span className="color-black">Unleash</span>
                <span className="color-yellow">Hidden Potential</span>
              </h1>
            </header>
            <main>
              <p>Connecting People</p>
              <p>
                with
                <TypingEffect />
              </p>
            </main>
            <footer>
              <CustomButton
                goTo="/aatral-india"
                displayText="Know more about us"
              />
            </footer>
          </div>
          <div className="home__desc-box__icon-cont">
            <HomeBuilding />
          </div>
        </div>
      </section>
      <Link
        to="/details"
        className="arrow__left_and_right_size pos-abs-y-center arrow__common-right"
      >
        <RightBlackArrow />
      </Link>
    </Fragment>
  );
}

export default Home;
