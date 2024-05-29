import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//styles
import "./details.scss";
//store
import useAatralStore from "../../store/AatralPage/aatralStore";
// components
import CustomButton from "../../components/CustomButtom/CustomBtm";
import Image from "../../components/UI/Image";
import SplitHeading from "../../components/SplitHeading/SplitHeading";
import SocialIconsComponent from "../../components/Social/SocialIcons";
// assets
import { ReactComponent as RightBlackArrow } from "../../assets/Icons/rightBlackArrow.svg";
import { ReactComponent as LeftBlackArrow } from "../../assets/Icons/leftBlackArrow.svg";
import detailsPagePersonImage from "../../assets/Images/detailPagePerson.png";

function DetailsPage() {
  const [isVisible, setIsVisible] = useState(false);
  // store
  const { aatral_details } = useAatralStore((state) => ({
    aatral_details: state.aatral_details,
  }));

  console.log("aatral_details", aatral_details);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <section className="details pos-rel">
      <div className="details__arrow-left-box">
        <Link to="/" className="arrow__left_and_right_size">
          <LeftBlackArrow />
        </Link>
      </div>
      <section className="details__main-cont wid-80 m-x-auto">
        <div className="details__main-cont__content-box">
          <header>
            <SplitHeading
              heading_first={aatral_details.heading_first}
              heading_last={aatral_details.heading_last}
            />
          </header>
          <main>
            {aatral_details.desc.map((para, ind) => (
              <p key={ind}>{para}</p>
            ))}
          </main>
          <footer>
            <CustomButton displayText="Join The Community" />
          </footer>
        </div>
        <div
          className={`details__main-cont__img-box fade-in-from-bottom ${
            isVisible ? "show" : ""
          }`}
        >
          <div>
            <label>{aatral_details.image_heading}</label>
            <Image src={detailsPagePersonImage} title="detailsPerson" />
          </div>
        </div>
      </section>
      <div className="details__arrow-right-box">
        <Link to="/home/get" className="arrow__left_and_right_size">
          <RightBlackArrow />
        </Link>
      </div>
      <SocialIconsComponent />
    </section>
  );
}

export default DetailsPage;
