import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as RightWhiteArrow } from "../../assets/Icons/Aatral/arrowRight.svg";

import ButtonComponent from "../UI/Button";

import "./custombtn.scss";

function CustomButton({ displayText, goTo }) {
  return (
    <ButtonComponent optionalClasses="cutom-btn-yellow">
      <Link className="display-in-blck" to={goTo}>
        <div>
          <p>{displayText}</p>
          <RightWhiteArrow />
        </div>
      </Link>
    </ButtonComponent>
  );
}

export default CustomButton;
