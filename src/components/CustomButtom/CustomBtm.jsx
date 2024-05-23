import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as RightWhiteArrow } from "../../assets/Icons/Aatral/arrowRight.svg";

import ButtonComponent from "../UI/Button";

import "./custombtn.scss";

function CustomButton() {
  return (
    <ButtonComponent customClassess="cutom-btn-yellow">
      <Link className="display-in-blck" to="/aatral-india">
        <div>
          <p>Know more about us</p>
          <RightWhiteArrow />
        </div>
      </Link>
    </ButtonComponent>
  );
}

export default CustomButton;
