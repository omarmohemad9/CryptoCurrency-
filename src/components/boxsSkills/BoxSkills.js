import React from "react";
import "./BoxSkills.css";
import GetIconImg from "../../images/small icons/ux.png";
import GetIconWeb from "../../images/small icons/website.png";
import GetIconCh from "../../images/small icons/character.png";
import GetIconUx from "../../images/small icons/ux.png";
import GetIconBrand from "../../images/small icons/brand.png";
import GetIconApp from "../../images/small icons/app.png";

import RightImg from "../../images/computer.png";

function BoxSkills() {
  return (
    <div className="boxsSkills">
      <div className="container">
        <div className="left">
          <div className="iconsBoxs">
            <img src={GetIconImg} />
            <h3> Ui-Ux Designer</h3>
          </div>
          <div className="iconsBoxs">
            <img src={GetIconWeb} />
            <h3> Web Design </h3>
          </div>
          <div className="iconsBoxs">
            <img src={GetIconCh} />
            <h3> Motions Design </h3>
          </div>
          <div className="iconsBoxs">
            <img src={GetIconUx} />
            <h3> Brand Design </h3>
          </div>
          <div className="iconsBoxs">
            <img src={GetIconBrand} />
            <h3> Apps Design</h3>
          </div>
          <div className="iconsBoxs">
            <img src={GetIconApp} />
            <h3> Digital Design </h3>
          </div>
        </div>
        <div className="right">
          <img src={RightImg} />
        </div>
      </div>
    </div>
  );
}

export default BoxSkills;
