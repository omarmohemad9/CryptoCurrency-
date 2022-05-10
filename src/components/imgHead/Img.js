import React from "react";
import ImgOnHead from "../../images/Frame.png";
import ScrollDown from "../../images/ScrollDown.png";
import "./Img.css";

function Img() {
  return (
    <div className="img">
      <div className="container">
        <div className="left">
          <h1>
            Hello,I'm Marlon Simon <span>UX-UI Designer</span>{" "}
          </h1>
          <h4>
            Download Returns <span>________</span>
          </h4>
          <div className="SScroll">
            <button
              onClick={() => {
                document.getElementById("Scroll").scrollIntoView();
              }}
            >
              <img src={ScrollDown} />
            </button>
            Scroll Down
          </div>
        </div>

        <div className="right">
          <img src={ImgOnHead} />
        </div>
      </div>
    </div>
  );
}

export default Img;
