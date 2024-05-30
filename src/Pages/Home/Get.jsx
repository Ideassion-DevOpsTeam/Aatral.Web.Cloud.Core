import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

//assets
import { ReactComponent as GetPageBG } from "../../assets/Icons/Home/getPageBackground.svg";
import { ReactComponent as RightArrow } from "../../assets/Icons/rightBlackArrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/Icons/leftBlackArrow.svg";

//components
import Card from "../../components/Card/card";
import SplitHeading from "../../components/SplitHeading/SplitHeading";
import SocialIconsComponent from "../../components/Social/SocialIcons";

// store
import useAatralHomeStore from "../../store/Home/homeStore";
import { getTestimonials } from "../../api";

function HomeGetPage() {
  const [fetchTestimonials, { loading, error, data: testimonials }] =
    useLazyQuery(getTestimonials);
  const { icons_details } = useAatralHomeStore((state) => ({
    icons_details: state.home_get_sec_icons_cont,
  }));

  useEffect(() => {
    fetchTestimonials();
  }, []);
  // console.log(", testimonials", testimonials?.testimonials?.data);
  let descDisplay;

  const cardDetails = testimonials ? testimonials?.testimonials?.data : [];
  // console.log("cardDetails", cardDetails);
  if (icons_details.desc) {
    descDisplay = (
      <div>
        {icons_details.desc.map((para, ind) => (
          <p key={ind}>{para}</p>
        ))}
      </div>
    );
  }

  // return false;
  return (
    <section className="home__get-page container__outer">
      <Link
        to="/details"
        className="home__get-page__arrow-left arrow__left_and_right_size"
      >
        <LeftArrow />
      </Link>
      <SocialIconsComponent />
      <section className="home__get-page__inner wid-90 m-auto">
        <div className="home__get-page__icons-box">
          <section className="wid-95 m-x-auto">
            <header>
              <SplitHeading
                heading_first={icons_details.heading_first}
                heading_last={icons_details.heading_last}
              />
            </header>
            <main>{descDisplay}</main>
            <footer>
              {icons_details.icon_div.map((item, ind) => (
                <div key={ind}>
                  {item.icon}
                  <label>{item.title}</label>
                </div>
              ))}
            </footer>
          </section>
        </div>
        {cardDetails?.length > 0 && (
          <div className="home__get-page__desc-box">
            <div className="home__get-page__desc-box__top-sec">
              <Card card_details={cardDetails[0]} />
              <Card card_details={cardDetails[1]} />
            </div>
            <div className="home__get-page__desc-box__bottom-sec">
              <Card card_details={cardDetails[2]} />
            </div>
          </div>
        )}
        <div className="home__get-page__svg-bg-cont">
          <GetPageBG />
        </div>
      </section>
      <Link
        to="/events"
        className="home__get-page__arrow-right arrow__left_and_right_size"
      >
        <RightArrow />
      </Link>
    </section>
  );
}

export default HomeGetPage;
