import React from "react";
import "./Coins.css";
const Coins = (props) => {
  return (
    <div className="Coins">
      <div className="container">
        {props.date.map((e) => {
          return (
            <div key={e}>
              <div>{e.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
