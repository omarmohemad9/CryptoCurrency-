import React, { useState, useRef } from "react";
import "./Slider.css";
import { ReactRouter, Link } from "react-router-dom";

let on = false;
let count = 1;

const Slider = ({ date, failed, des }) => {
  let [start, setStart] = useState(null);
  let [mobStart, setMobStart] = useState(null);

  let slide = useRef(null);
  let InnerSlide = useRef(null);

  const onMoveDown = (e) => {
    on = true;
    setStart(e.pageX - InnerSlide.current.offsetLeft);
  };
  const onMoveDownMobile = (e) => {
    on = true;
    setMobStart(e.targetTouches[0].pageX - InnerSlide.current.offsetLeft);
  };
  const onMoveout = (e) => {
    on = false;
  };
  const BtnSlideIncrea = () => {
    let offWidSlid = InnerSlide.current.offsetWidth;

    if (count >= 17) {
      count = 17;
    } else {
      count += 1;
    }
    InnerSlide.current.style.left = "-" + offWidSlid * count + "px";
  };

  const BtnSlideDecrea = () => {
    let offWidSlid = InnerSlide.current.offsetWidth;
    if (count <= 0) {
      count = 0;
    } else {
      count -= 1;
    }
    InnerSlide.current.style.left = "-" + offWidSlid * count + "px";
  };

  return (
    <div
      className="slider"
      ref={slide}
      onMouseDown={onMoveDown}
      onTouchStart={onMoveDownMobile}
      onMouseMove={(e) => {
        if (!on) return;
        let x = e.clientX - start;
        if (x > 0) {
          InnerSlide.current.style.left = 10 + "px";
        } else {
          InnerSlide.current.style.left = x * 5 + "px";
        }
        let offWidSlid = InnerSlide.current.offsetWidth;

        if (x > offWidSlid) {
          count++;
        } else {
          count--;
        }
      }}
      onTouchMove={(e) => {
        if (!on) return;
        let x = e.targetTouches[0].clientX - mobStart;
        if (x > 0) {
          InnerSlide.current.style.left = 10 + "px";
        } else if (x <= -16301) {
          InnerSlide.current.style.left = -16300 + "px";
          console.log("styop");
        } else {
          InnerSlide.current.style.left = x + "px";
        }
        let offWidSlid = InnerSlide.current.offsetWidth;

        if (x > offWidSlid) {
          count++;
        } else {
          count--;
        }
      }}
      onMouseUp={onMoveout}
      onTouchEnd={onMoveout}
    >
      {!des && !failed && (
        <div className="load">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      <div className="slider-in" ref={InnerSlide}>
        {date &&
          date.map((e) => {
            return (
              <Link
                className="box-slide"
                key={e.id}
                onClick={() => {
                  console.log(e.id);
                }}
                to={e.id}
              >
                <div className="topSide">
                  <span>{e.market_cap_rank}</span>
                  <img src={e.image} />
                  <h4>{e.name} </h4>
                </div>
                <div className="bottomSlide">
                  <p>${e.current_price}</p>
                  <div
                    style={{
                      color:
                        `${e.market_cap_change_percentage_24h}`[0] === "-"
                          ? "red"
                          : "green",
                    }}
                  >
                    {`${e.market_cap_change_percentage_24h}`[0] === "-"
                      ? `-${`${e.market_cap_change_percentage_24h.toFixed(
                          3
                        )}%`.slice(1)}`
                      : `+${e.market_cap_change_percentage_24h.toFixed(3)}%`}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <div className="BtnsSlid">
        <button className="decrease" onClick={BtnSlideDecrea}>
          {"<"}
        </button>
        <button className="increase" onClick={BtnSlideIncrea}>
          {">"}
        </button>
      </div>
      {failed && (
        <div className="failed">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
