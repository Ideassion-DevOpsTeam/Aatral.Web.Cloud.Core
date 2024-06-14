import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./aatral.scss";
import { useLazyQuery } from "@apollo/client";
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
import Icon from "@ant-design/icons";
// api
import { getCommitteeMembers, getContents } from "../../api/index";
import { apiurl } from "../../api/API_URL";
import RiseLogo from "../../assets/Images/rise_logo.svg";
import { rightArrow } from "../../constants/icons";
import useContentStore from "../../store/Content/contentStore";

function AatralPage() {
  const [getCommittee, { loading, error, data: committeeMembers }] = useLazyQuery(getCommitteeMembers);
  const {contentData} = useContentStore()


  useEffect(() => {
    getCommittee();
  }, []);

  

  let executiveCommitteeMembers = [];
  let streeingCommitteeMembers = [];

  committeeMembers?.members?.data.map((member) =>
    member.attributes.Type === "Executive_Committee"
      ? executiveCommitteeMembers.push(member)
      : streeingCommitteeMembers.push(member)
  );

  
  let exec_members;

  if (executiveCommitteeMembers.length > 0) {
    exec_members = executiveCommitteeMembers.map((member) => {
      const image = member?.attributes?.Image?.data?.attributes.url;
      return (
        <div key={member?.id} className="aatral__committe-sec__item-box">
          <div className="aatral__committe-sec__item-box__img-cont">
            <Image
              loading="lazy"
              src={image ? `${apiurl}${image}` : DefaultImage}
              alt="default"
            />
          </div>
          <div className="aatral__committe-sec__item-box__desc-cont">
            <label>{member.attributes.Name}</label>
            <blockquote>
              {member.attributes.companies.data[0].Name}
              {member.attributes.companies.data[0].attributes.Name}
            </blockquote>
          </div>
        </div>
      );
    });
  }
  let streering_members;
  if (streeingCommitteeMembers.length > 0) {
    streering_members = streeingCommitteeMembers.map((member) => {
      const image = member?.attributes?.Image?.data?.attributes.url;
      return (
        <div key={member?.id} className="aatral__committe-sec__item-box">
          <div className="aatral__committe-sec__item-box__img-cont">
            <Image
              loading="lazy"
              src={image ? `${apiurl}${image}` : DefaultImage}
              alt="default"
            />
          </div>
          <div className="aatral__committe-sec__item-box__desc-cont">
            <label>{member.attributes.Name}</label>
            <blockquote>
              {member.attributes.Designation},{" "}
              {member.attributes.companies.data[0].Name}
              {member.attributes.companies.data[0].attributes.Name}
            </blockquote>
          </div>
        </div>
      );
    });
  }

  // return false;
  return (
    <section className="aatral">
      <SocialIcons />

      <section className="wid-80 m-x-auto aatral__inner">
        <AatralTopSection Description={contentData?.Description} />
        <AatralNameSection TheName={contentData?.TheName} />
      </section>

      <section className="aatral__vision-sec">
        <div className="aatral__vision-sec__main-cont">
          <div className="aatral__vision-sec__main-cont__icon-box-mike">
            <Mike />
          </div>
          <div className="aatral__vision-sec__main-cont__desc-box">
            <SplitHeading
              heading_first="Our"
              heading_last="Vision"
              optionalClasses={"heading-flex"}
            />
            <p>
              {contentData?.OurVision}
            </p>
          </div>
          <div className="aatral__vision-sec__main-cont__icon-box-cup">
            <Cup />
          </div>
        </div>
        <footer>
          <VisionBtm />
        </footer>
      </section>

      <div className="about___rise">
        <div className="about__rise">
          <div className="about__rise--left">
            <img src={RiseLogo} alt="" />
          </div>
          <div className="about__rise--right">
            <p>
              {contentData?.TheRise}
            </p>
            <a href="https://tamilrise.org/" target="_blank" rel="noreferrer">
              Know more <Icon component={rightArrow} />
            </a>
          </div>
        </div>
      </div>

      <section className="aatral__committe-sec streeing-ali-adjust  container__outer">
        <section className="wid-80 m-x-auto">
          <SplitHeading
            heading_first="Steering"
            heading_last="Committee"
            optionalClasses={"heading-flex m-y-block-large"}
          />
          <section className="aatral__committe-sec__list-box">
            {streering_members}
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
            {exec_members}
          </section>
        </section>
      </section>
      <section className="aatral__join-sec">
        <div className="aatral__join-sec__content-box">
          <label>Explore plans suitable for your business</label>
          <Link to="/become-a-member">
            <Button>
              <div>
                <p>Join The Community</p>
                <ArrowRight />
              </div>
            </Button>
          </Link>
        </div>
        <div className="aatral__btm-svg">
          <Bottom />
        </div>
      </section>
    </section>
  );
}

export default AatralPage;
