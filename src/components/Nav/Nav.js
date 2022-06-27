import React, { useEffect, useRef } from "react";
import "./Nav.css";

const Nav = () => {
  let arrLis = [];
  function lisBtn(e) {
    arrLis.forEach((e) => {
      e.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    console.log(arrLis);
  }

  // add class to ul on mobile
  let ulOnMo = useRef(null);
  function addClassOnMo() {
    ulOnMo.current.classList.toggle("active");
  }

  return (
    <div className="Nav">
      <div className="container">
        <div className="left_Nav">
          <div className="icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <button className="btn_Menu" onClick={addClassOnMo}>
          ☰
        </button>

        <div className="Nav_onMobile">
          <UiList lisBtn={lisBtn} arrLis={arrLis} ulOnMo={ulOnMo} />
        </div>

        <div className="center_Nav">
          <ul>
            <li
              className="active"
              ref={(input) => {
                arrLis.push(input);
              }}
              onClick={lisBtn}
            >
              <a href="#">Market</a>
            </li>
            <li
              ref={(input) => {
                arrLis.push(input);
              }}
              onClick={lisBtn}
            >
              <a href="#">Watchlist</a>
            </li>
            <li
              ref={(input) => {
                arrLis.push(input);
              }}
              onClick={lisBtn}
            >
              <a href="#">Portfolio</a>
            </li>
            <li
              ref={(input) => {
                arrLis.push(input);
              }}
              onClick={lisBtn}
            >
              <a href="#">Learn</a>
            </li>
          </ul>
        </div>
        <div className="right_Nav">
          <span className="langCh">English</span>
          <button className="coinBtn">
            USD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="15"
              viewBox="0 0 10 19"
              fill="none"
            >
              <path d="M1 1L9 9.5L1 18" stroke="#282828" />
            </svg>
          </button>
          <div className="lang_Choose">
            <div>AR</div>
            <div>FR</div>
          </div>
          <button className="sign twin ondesk">Sign in</button>
          <button className="reg twin ondesk">Register</button>
        </div>
      </div>
    </div>
  );
};

function UiList(props) {
  return (
    <ul className="UiList " ref={props.ulOnMo}>
      <li
        className="active"
        ref={(input) => {
          props.arrLis.push(input);
        }}
        onClick={props.lisBtn}
      >
        <a href="#">Market</a>
      </li>
      <li
        ref={(input) => {
          props.arrLis.push(input);
        }}
        onClick={props.lisBtn}
      >
        <a href="#">Watchlist</a>
      </li>
      <li
        ref={(input) => {
          props.arrLis.push(input);
        }}
        onClick={props.lisBtn}
      >
        <a href="#">Portfolio</a>
      </li>
      <li
        ref={(input) => {
          props.arrLis.push(input);
        }}
        onClick={props.lisBtn}
      >
        <a href="#">Learn</a>
      </li>
      <li>
        <button className="sign twin two">Sign in</button>
      </li>
      <li>
        <button className="reg twin two">Register</button>
      </li>
    </ul>
  );
}

export default Nav;
