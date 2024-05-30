import React from 'react';
import "./events.scss";
import MainEventsImage from '../../components/Event/EventsImage';
import { Button } from 'antd';
import Icon from '@ant-design/icons';
import { rightArrow } from '../../constants/icons';
import { Link } from 'react-router-dom';
import { ReactComponent as LeftBlackArrow } from "../../assets/Icons/leftBlackArrow.svg";

const Events = () => {
  return (
    <div className="events__section">
      <div className="details__arrow-left-box">
        <Link to="/home/get" className="arrow__left_and_right_size">
          <LeftBlackArrow />
        </Link>
      </div>
          <div className="events__section__img">
            <MainEventsImage />  
          </div>
          <p>More networking events coming your way. Stay tuned!</p>
          {/* <Button className="events__section__btn">All events <Icon component={rightArrow} /></Button> */}
    </div>
  )
}

export default Events