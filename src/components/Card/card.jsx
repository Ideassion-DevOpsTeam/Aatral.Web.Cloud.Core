import React from "react";

//assets
import { ReactComponent as Comma } from "../../assets/Icons/Home/commaIcon.svg";

// styles
import "./card.scss";
// components
import Image from "../UI/Image";

function CardComponent({ card_details }) {
  return (
    <section className="card">
      <section className="wid-90 m-x-auto">
        <div className="card__heading-box">
          <div className="card__heading-box__image-cont">
            <Image src={card_details.image} />
          </div>
          <div className="card__heading-box__desc-cont">
            <label>{card_details.name}</label>
            <blockquote>{card_details.postion}</blockquote>
          </div>
        </div>
        <div className="card__icon-box">
          <Comma />
        </div>
        <div className="card__desc-box">
          <p>{card_details.desc}</p>
        </div>
      </section>
    </section>
  );
}

export default CardComponent;
