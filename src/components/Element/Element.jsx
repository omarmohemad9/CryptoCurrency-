import React, { useState, useEffect, Fragment } from "react";
import "./Element.css";
import ReactRouter, { useParams } from "react-router-dom";
import axios from "axios";
let arr = [];
const Element = () => {
  let [dataTo, setDataTo] = useState([]);
  let [result, setResult] = useState(null);
  let axUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1";

  let paramUrl = useParams();
  useEffect(() => {
    axios.get(axUrl).then((e) => {
      e.data.map((v) => {
        arr.push(v.id);
        setResult(arr.indexOf(paramUrl.id));
        setDataTo(e.data);
        // console.log(v);
      });
    });
  }, []);
  let DataF = dataTo[result];
  return (
    <div className="alert">
      <div className="container">
        {DataF && (
          <Fragment>
            <div className="head">
              <div className="left-Top">
                <img src={DataF.image} alt="" />
                <h1>{DataF.name}</h1>
                <div className="Sym">{DataF.symbol}</div>
              </div>
              <div className="priceData">
                <div
                  className="cPerecent"
                  style={{
                    color: `${DataF.price_change_percentage_24h}`.startsWith(
                      "-"
                    )
                      ? "red"
                      : "green",
                    backgroundColor:
                      `${DataF.price_change_percentage_24h}`.startsWith("-")
                        ? "#ff00001f"
                        : "#3bff3b40",
                  }}
                >
                  {`${DataF.price_change_percentage_24h.toFixed(3)}`.startsWith(
                    "-"
                  )
                    ? DataF.price_change_percentage_24h.toFixed(3)
                    : "+" + DataF.price_change_percentage_24h.toFixed(3)}
                  %
                </div>

                <h1 className="price">{DataF.current_price}$</h1>
              </div>
            </div>
            <table className="detailsTable">
              <thead>
                <tr>
                  <th>market cap</th>
                  <th>24 hours low</th>
                  <th>24 hours high</th>
                  <th>circulating supply</th>
                  <th>Total supply</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{DataF.total_volume.toLocaleString()}$</td>
                  <td>{DataF.low_24h}$</td>
                  <td>{DataF.high_24h}$</td>
                  <td>{DataF.circulating_supply.toLocaleString()}</td>
                  <td>{DataF.total_supply.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Element;
