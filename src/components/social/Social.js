import React from "react";
import "./Social.css";
import imgFace from "../../images/facebook.png";
import imgPin from "../../images/pinterest.png";
import imgInsta from "../../images/instagram.png";
function Social() {
  return (
    <div className="Social AllSections">
      <div className="container">
        <div className="left">
          <h3>Social Media</h3>
          <p>Mauris aliquet egestas metus, id pellentesque mauris tincidunt.</p>
        </div>
        <div className="right">
          <span className="Brand">
            <img src={imgFace} />
          </span>
          <span className="Brand">

            <span><img src={imgPin} /></span>
            <span>Pinterest</span>
          </span>
          <span className="Brand">
            <img src={imgInsta} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Social;
