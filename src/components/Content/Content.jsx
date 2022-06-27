import React from "react";
import "./Content.css";
import Slider from "./Slider/Slider.jsx";
const Content = ({ date, failed, des }) => {
  // console.log(date[0].price_change_percentage);
  // console.log(date[0].price_change_24h);
  return (
    <div className="content">
      <div className="container">
        <div className="onePh">
          <div className="left">
            <h1>Cryptocurrency Price by Market Cap</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              repellendus expedita ea dignissimos, corrupti eligendi aliquid
              eveniet illo est iure?
            </p>
          </div>
        </div>
        <Slider date={date} failed={failed} des={des} />
      </div>
    </div>
  );
};

export default Content;
