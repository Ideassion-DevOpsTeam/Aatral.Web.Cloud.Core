import React from "react";
import "./aatral.scss";
// assets
import { ReactComponent as VisionBtm } from "../../assets/Icons/Aatral/aatralVisionBtm.svg";
import { ReactComponent as Cup } from "../../assets/Icons/Aatral/cup.svg";
import { ReactComponent as Mike } from "../../assets/Icons/Aatral/mike.svg";
import { ReactComponent as Bottom } from "../../assets/Icons/Aatral/Btm.svg";
import { ReactComponent as ArrowRight } from "../../assets/Icons/Aatral/arrowRight.svg";
import DefaultImage from "../../assets/Icons/defaultPerson.svg";
import PersonOne from "../../assets/Images/personOne.png";
// componenrs
import AatralTopSection from "./topPage";
import AatralNameSection from "./NameSection";
import SplitHeading from "../../components/SplitHeading/SplitHeading";
import SocialIcons from "../../components/Social/SocialIcons";
// ui
import Image from "../../components/UI/Image";
import Button from "../../components/UI/Button";

function AatralPage() {
  return (
    <section className="aatral">
      <SocialIcons />
      <section className="wid-80 m-x-auto aatral__inner">
        <AatralTopSection />
        <AatralNameSection />
      </section>
      <section className="aatral__vision-sec">
        <div className="aatral__vision-sec__main-cont">
          <div className="aatral__vision-sec__main-cont__icon-box">
            <Mike />
          </div>
          <div className="aatral__vision-sec__main-cont__desc-box">
            <SplitHeading
              heading_first="Our"
              heading_last="Vision"
              optionalClasses={"heading-flex"}
            />
            <p>
              To become the foremost collective leadership of national Tamil IT
              entrepreneurs, catalysing transformative changes for the sustained
              future growth of the IT ecosystem, and benefiting Tamils
              worldwide.
            </p>
          </div>
          <div className="aatral__vision-sec__main-cont__icon-box">
            <Cup />
          </div>
        </div>
        <footer>
          <VisionBtm />
        </footer>
      </section>
      <section className="aatral__committe-sec container__outer">
        <section className="wid-80 m-x-auto">
          <SplitHeading
            heading_first="Steering"
            heading_last="Committee"
            optionalClasses={"heading-flex m-y-block-large"}
          />
          <section className="aatral__committe-sec__list-box">
            <div className="aatral__committe-sec__item-box">
              <div className="aatral__committe-sec__item-box__img-cont">
                <Image src={DefaultImage} alt="default" />
              </div>
              <div className="aatral__committe-sec__item-box__desc-cont">
                <label>Full Name</label>
                <blockquote>Company</blockquote>
              </div>
            </div>
            <div className="aatral__committe-sec__item-box">
              <div className="aatral__committe-sec__item-box__img-cont">
                <Image src={DefaultImage} alt="default" />
              </div>
              <div className="aatral__committe-sec__item-box__desc-cont">
                <label>Full Name</label>
                <blockquote>Company</blockquote>
              </div>
            </div>
            <div className="aatral__committe-sec__item-box">
              <div className="aatral__committe-sec__item-box__img-cont">
                <Image src={DefaultImage} alt="default" />
              </div>
              <div className="aatral__committe-sec__item-box__desc-cont">
                <label>Full Name</label>
                <blockquote>Company</blockquote>
              </div>
            </div>
            <div className="aatral__committe-sec__item-box">
              <div className="aatral__committe-sec__item-box__img-cont">
                <Image src={DefaultImage} alt="default" />
              </div>
              <div className="aatral__committe-sec__item-box__desc-cont">
                <label>Full Name</label>
                <blockquote>Company</blockquote>
              </div>
            </div>
            <div className="aatral__committe-sec__item-box">
              <div className="aatral__committe-sec__item-box__img-cont">
                <Image src={DefaultImage} alt="default" />
              </div>
              <div className="aatral__committe-sec__item-box__desc-cont">
                <label>Full Name</label>
                <blockquote>Company</blockquote>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className="aatral__committe-sec container__outer">
        <section className="wid-80 m-x-auto">
          <SplitHeading
            heading_first="Executive"
            heading_last="Committee"
            optionalClasses={"heading-flex m-y-block-large "}
          />
          <section className="aatral__committe-sec__list-box">
            <div className="aatral__committe-sec__item-box">
              <div className="aatral__committe-sec__item-box__img-cont">
                <Image src={PersonOne} title="director" />
              </div>
              <div className="aatral__committe-sec__item-box__desc-cont">
                <label>Imthyaz Sheriff</label>
                <blockquote>Ideassion Group</blockquote>
              </div>
            </div>
            <div className="aatral__committe-sec__item-box">
              <div className="aatral__committe-sec__item-box__img-cont">
                <Image src={DefaultImage} alt="default" />
              </div>
              <div className="aatral__committe-sec__item-box__desc-cont">
                <label>Full Name</label>
                <blockquote>Company</blockquote>
              </div>
            </div>
            <div className="aatral__committe-sec__item-box">
              <div className="aatral__committe-sec__item-box__img-cont">
                <Image src={DefaultImage} alt="default" />
              </div>
              <div className="aatral__committe-sec__item-box__desc-cont">
                <label>Full Name</label>
                <blockquote>Company</blockquote>
              </div>
            </div>
            <div className="aatral__committe-sec__item-box">
              <div className="aatral__committe-sec__item-box__img-cont">
                <Image src={DefaultImage} alt="default" />
              </div>
              <div className="aatral__committe-sec__item-box__desc-cont">
                <label>Full Name</label>
                <blockquote>Company</blockquote>
              </div>
            </div>
            <div className="aatral__committe-sec__item-box">
              <div className="aatral__committe-sec__item-box__img-cont">
                <Image src={DefaultImage} alt="default" />
              </div>
              <div className="aatral__committe-sec__item-box__desc-cont">
                <label>Full Name</label>
                <blockquote>Company</blockquote>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className="aatral__join-sec">
        <div className="aatral__join-sec__content-box">
          <label>Explore plans suitable for your business</label>
          <Button>
            <div>
              <p>Join The Community</p>
              <ArrowRight />
            </div>
          </Button>
        </div>
        <Bottom />
      </section>
    </section>
  );
}

export default AatralPage;
