import React from "react";
//styles
import "./details.scss";
//store
import useAatralStore from "../../store/AatralPage/aatralStore";
// components
import CustomButton from "../../components/CustomButtom/CustomBtm";
import Image from "../../components/UI/Image";
import SocialIconsComponent from "../../components/Social/SocialIcons";
// assets
import { ReactComponent as RightBlackArrow } from "../../assets/Icons/rightBlackArrow.svg";
import { ReactComponent as LeftBlackArrow } from "../../assets/Icons/leftBlackArrow.svg";
import detailsPagePersonImage from "../../assets/Images/detailPagePerson.png";

function DetailsPage() {
  const { aatral_details } = useAatralStore((state) => ({
    aatral_details: state.aatral_details,
  }));

  console.log("aatral_details", aatral_details);

  return (
    <section className="details pos-rel">
      <div className="pos-abs pos-abs-y-center details__arrow-left-box">
        <LeftBlackArrow />
      </div>
      <section className="details__main-cont wid-80 m-x-auto">
        <div className="details__main-cont__content-box">
          <header>
            <h1 className="color-black">{aatral_details.heading_first}</h1>
            <h1 className="color-yellow">{aatral_details.heading_last}</h1>
          </header>
          <main>
            {aatral_details.desc.map((para, ind) => (
              <p key={ind}>{para}</p>
            ))}
          </main>
          <footer>
            <CustomButton />
          </footer>
        </div>
        <div className="details__main-cont__img-box">
          <div>
            <Image src={detailsPagePersonImage} title="detailsPerson" />
          </div>
        </div>
      </section>
      <div className="details__arrow-right-box pos-abs pos-abs-y-center">
        <RightBlackArrow />
      </div>
    </section>
  );
}

export default DetailsPage;
