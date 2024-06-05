import React from "react";
import "./events.scss";
import MainEventsImage from "../../components/Event/EventsImage";
import { Button } from "antd";
import Icon from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LeftBlackArrow } from "../../assets/Icons/leftBlackArrow.svg";
import SocialIconsComponent from "../../components/Social/SocialIcons";

const Events = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="events__section">
      <SocialIconsComponent />
      {state?.arrow && (
        <div className="pos-abs-y-center arrow__common-left">
          <Link to="/home/get" className="arrow__left_and_right_size">
            <LeftBlackArrow />
          </Link>
        </div>
      )}
      <div className="events__section__img">
        <MainEventsImage />
      </div>
      <p>More networking events coming your way. Stay tuned!</p>
    </div>
  );
};

export default Events;
