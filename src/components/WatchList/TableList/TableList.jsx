import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { KnowContext } from "../../Home/Home.jsx";
import "./TableList.css";
const TableList = ({ date, failed, searchRef, des }) => {
  let [elementSet, setElement] = useState();

  let [count, setCount] = useState(0);
  let countArr = [0, 20, 40, 60, 80];
  let dateC = date.slice(countArr[count], (count + 1) * 20);

  let DLTandAdd = (ele) => {
    document.querySelectorAll(".CltOfBtn button").forEach((e) => {
      e.classList.remove("active");
    });
    ele.target.classList.add("active");
  };
  let upAndAdd = () => {
    let btn = document.querySelectorAll(".CltOfBtn button");
    btn.forEach((e) => {
      e.classList.remove("active");
    });
    btn[count].classList.add("active");
    console.log(count);
  };
  return (
    <Fragment>
      <table width="100%">
        <thead>
          <tr className="uniqueTr">
            <th style={{ width: "20px" }}>#</th>
            <th>coin Name</th>
            <th>coin price</th>
            <th>precent change 24h</th>
            <th>24h high price</th>
            <th>24h low price</th>
          </tr>
        </thead>

        <tbody>
          {date &&
            dateC.map((e, i) => {
              return (
                <tr className="all getName" key={i}>
                  <td className={"i" + i}>{e.market_cap_rank}</td>
                  <td className={"n"}>
                    <Link to={"/" + e.id}>
                      <img src={e.image} />
                    </Link>
                    <Link to={"/" + e.id}>
                      <h4 className="name" ref={searchRef}>
                        {e.name}
                      </h4>
                    </Link>
                    <Link to={"/" + e.id}>
                      <div className="Sym">{e.symbol.toUpperCase()}</div>
                    </Link>
                  </td>
                  <td>${e.current_price}</td>
                  {`${e.market_cap_change_percentage_24h}`[0] == "-" ? (
                    <td style={{ color: "#d50d0dd1" }}>
                      {e.market_cap_change_percentage_24h.toFixed(3)}%
                    </td>
                  ) : (
                    <td style={{ color: "green" }}>
                      +{e.market_cap_change_percentage_24h.toFixed(3)}%
                    </td>
                  )}
                  <td>${e.high_24h}</td>
                  <td>${e.low_24h}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {!des && !failed && (
        <div className="load">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      {failed && (
        <div className="failed">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      <div className="btnsINC">
        <button
          className="decrease"
          onClick={() => {
            if (count < 1) {
              setCount(4);
            } else if (count > 4) {
              setCount(0);
            } else {
              setCount((e) => e - 1);
            }
            upAndAdd();
          }}
        >
          {" "}
          {` < `}{" "}
        </button>

        <div className="CltOfBtn">
          {countArr.map((e, i) => {
            return (
              <button
                data-num={i}
                onClick={(el) => {
                  DLTandAdd(el);
                  setCount(+el.target.dataset.num);
                  // upAndAdd();
                }}
                key={i}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        <button
          className="btInc"
          onClick={(e) => {
            if (count < 0) {
              setCount(4);
            } else if (count > 3) {
              setCount(0);
            } else {
              setCount((e) => e + 1);
            }

            upAndAdd();
          }}
        >
          {">"}
        </button>
      </div>
    </Fragment>
  );
};
// let str = 1;
// str.toLocaleString;
export default TableList;
