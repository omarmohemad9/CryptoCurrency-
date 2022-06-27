import React, { useRef } from "react";
import "./WatchList.css";
import TableList from "./TableList/TableList";
let categories = ["Top Gainers", "Top Losers"];

let placeHol = "";

const WatchList = ({ date, failed, des }) => {
  const arr = [1, 2, 3];

  let searchRef = useRef(null);
  return (
    <div className="List">
      <div className="container">
        <div className="topSection">
          <div className="btnsGa">
            <div className="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
              </svg>
              <input
                type="text"
                id=""
                placeholder="Search Coin"
                onFocus={(e) => {
                  placeHol = e.currentTarget.placeholder;

                  e.currentTarget.placeholder = "";
                }}
                onBlur={(e) => {
                  e.currentTarget.placeholder = placeHol;
                }}
                onChange={(input) => {
                  let es = document.querySelectorAll(".getName");
                  let esArr = Array.from(es);
                  esArr.filter((e) => {
                    let nameInH4 = e.childNodes[1].childNodes[1];
                    let smallName = e.childNodes[1].childNodes[2];

                    nameInH4.textContent
                      .toLowerCase()
                      .startsWith(input.target.value.toLowerCase()) ||
                    smallName.textContent
                      .toLowerCase()
                      .startsWith(input.target.value.toLowerCase())
                      ? (e.style.display = "table-row")
                      : (e.style.display = "none");
                  });
                  // let s = elements.target.value;
                }}
              />
            </div>
          </div>
        </div>
        <div className="br"></div>
        <TableList date={date} failed={failed} searhRef={searchRef} des={des} />
      </div>
    </div>
  );
};

export default WatchList;
