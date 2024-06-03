import React from "react";
import { Link } from "react-router-dom";
//components
import ButtonComponent from "../UI/Button";

//styles
import "./mailSucess.scss";

// assets
import { ReactComponent as PaperFlight } from "../../assets/Icons/Contact/papaer_flight.svg";
import { ReactComponent as RightArrow } from "../../assets/Icons/Contact/right_yellow.svg";

function MailSucessComponent() {
  return (
    <div className="mail__sucess-cont">
      <section className="mail__sucess-cont__desc-cont">
        <label>
          Your message has been sent! We’ll get back to you as soon as possible.
        </label>
        <ButtonComponent>
          <Link to="/">
            Go to home <RightArrow />
          </Link>
        </ButtonComponent>
      </section>
      <section className="mail__sucess-cont__icon-cont">
        <PaperFlight />
      </section>
    </div>
  );
}

export default MailSucessComponent;
