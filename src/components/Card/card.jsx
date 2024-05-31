import React from "react";

//assets
import { ReactComponent as Comma } from "../../assets/Icons/Home/commaIcon.svg";
import DefaultImage from "../../assets/Icons/defaultPerson.svg";

// image-main-url
import { apiurl } from "../../api/API_URL";

// styles
import "./card.scss";
// components
import Image from "../UI/Image";

function CardComponent({ card_details }) {
  const desc = card_details?.attributes?.Content;
  const details = card_details?.attributes?.member?.data?.attributes;
  let image = details?.Image?.data?.attributes?.url;
  image = image ? `${apiurl}${image}` : null;
  const companyName = details?.companies?.data[0]?.attributes?.Name;
  // return false;
  return (
    <section className="card">
      <section className="wid-90 m-x-auto">
        <div className="card__heading-box">
          <div className="card__heading-box__image-cont">
            <Image
              src={image ? image : DefaultImage}
              title={"Testinomal member"}
            />
          </div>
          <div className="card__heading-box__desc-cont">
            <label>{details.Name}</label>
            <blockquote>
              {details.Designation} {companyName}
            </blockquote>
          </div>
        </div>
        <div className="card__icon-box">
          <Comma />
        </div>
        <div className="card__desc-box">
          <p>{desc}</p>
        </div>
      </section>
    </section>
  );
}

export default CardComponent;
