import React from "react";
import { Link } from "react-router-dom";

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

function HomeGetPage() {
  const { icons_details, card_details } = useAatralHomeStore((state) => ({
    icons_details: state.home_get_sec_icons_cont,
    card_details: state.home_get_sec_desc_cont.card_details,
  }));
  
  let descDisplay;

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
      <Link to="/details" className="home__get-page__arrow-left">
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
        <div className="home__get-page__desc-box">
          {/* <section className="wid-95 m-x-auto"> */}
          <div className="home__get-page__desc-box__top-sec">
            <Card card_details={card_details[0]} />
            <Card card_details={card_details[1]} />
          </div>
          <div className="home__get-page__desc-box__bottom-sec">
            <Card card_details={card_details[2]} />
          </div>
          {/* </section> */}
        </div>
        <div className="home__get-page__svg-bg-cont">
          <GetPageBG />
        </div>
      </section>
      <Link to="/events" className="home__get-page__arrow-right">
        <RightArrow />
      </Link>
    </section>
  );
}

export default HomeGetPage;
