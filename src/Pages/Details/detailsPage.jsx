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

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <section className="details pos-rel">
      <div className="arrow__common-left pos-abs-y-center">
        <Link to="/" className="arrow__left_and_right_size arrow__common-right">
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
            <p>A pivotal part of Tamil RISE, is a vibrant community, specifically designed for Tamil IT entrepreneurs and professionals seeking to connect, thrive and expand their horizons.</p>
              <p>By understanding challenges and opportunities inherent in the dynamic IT industry we have created a nurturing environment where like-minded individuals can come together to share insights, forge partnerships, and inspire one another to reach new heights of success.</p>
              <p>Whether you're a seasoned entrepreneur or just starting out, you'll find support, and gain access to resources, mentorship, and friendship in our community.</p>
            {/* <p>{aatral_details?.desc}</p> */}
          </main>
          <footer>
            <CustomButton
              displayText="Join The Community"
              goTo="/become-a-member"
            />
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
      <div className="pos-abs-y-center arrow__common-right">
        <Link
          to="/home/get"
          className="arrow__left_and_right_size arrow__common-right"
        >
          <RightBlackArrow />
        </Link>
      </div>
      <SocialIconsComponent />
    </section>
  );
}

export default DetailsPage;
