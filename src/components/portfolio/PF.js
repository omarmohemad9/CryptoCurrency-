import React, { useEffect, useRef } from "react";
import bubblesImg from "../../images/New/babels.png";
import CycleImg from "../../images/New/cycles.png";
import paperImg from "../../images/New/paper.png";
import "./PF.css";
function PF() {
  const sizeTop = useRef(null);

  useEffect(() => {
    const size = sizeTop.current.dataset.size;
    sizeTop.current.marginTop = size + "px";
    console.log(size + "px");
    let images = document.querySelectorAll(".bottom img");
    images.forEach((e) => {
      let sizei = e.dataset.size;
      // console.log(sizei);
      e.style.marginTop = sizei + "px";
    });
  }, []);

  return (
    <div className="pf">
      <div className="container">
        <div className="top">
          <button> 3D Motion Design </button>
          <button className="right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
            >
              <path
                d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                fill="#FF4C60"
              />
            </svg>
          </button>
          <h2>Portfolio</h2>
        </div>
        <div className="bottom">
          <img src={bubblesImg} data-size="30" ref={sizeTop} />
          <img src={CycleImg} data-size="50" ref={sizeTop} />
          <img src={paperImg} data-size="80" ref={sizeTop} />
        </div>
      </div>
    </div>
  );
}

export default PF;
