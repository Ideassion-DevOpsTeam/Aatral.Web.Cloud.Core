import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//styles
import "./home.scss";
// components
import SocialIcons from "../../components/Social/SocialIcons";
import CustomButton from "../../components/CustomButtom/CustomBtm";

// assets
import { ReactComponent as HomeBuilding } from "../../assets/Icons/Home/homeRightBuilding.svg";
import { ReactComponent as Map } from "../../assets/Icons/Home/indiaMap.svg";
import { ReactComponent as RightBlackArrow } from "../../assets/Icons/rightBlackArrow.svg";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // console.log("displayText", displayText);

  const typingSpeed = 1000;
  const deletingSpeed = 500;

  useEffect(() => {
    const words = ["Ideas", "People"];
    const interval = setInterval(
      () => {
        if (isTyping) {
          const newText = words[currentIndex].substring(
            0,
            displayText.length + 1
          );
          setDisplayText(newText);

          if (newText === words[currentIndex]) {
            setIsTyping(false);
          }
        } else {
          const newText = words[currentIndex].substring(
            0,
            displayText.length - 1
          );
          setDisplayText(newText);

          if (newText === "") {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
            setIsTyping(true);
          }
        }
      },
      isTyping ? typingSpeed : deletingSpeed
    );

    return () => clearInterval(interval);
  }, [displayText, isTyping, currentIndex]);

  // return false;

  return (
    <section className="home">
      <SocialIcons />
      <div className="home__map-box">
        <section className="wid-80">
          <Map />
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
              <span>{displayText}</span>
              <span className="bigger_cursor">I</span>
            </h1>
          </main>
          <footer>
            <CustomButton />
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
