import React from "react";
import "./Company.css";
import airBnB from "../../images/airbnb.png";
import samsung from "../../images/samsung.png";
import amazon from "../../images/amazon.png";
function Company() {
  return (
    <div className="Company AllSections">
      <div className="container">
        <div className="left">
          <h3> Happy Clients </h3>
          <p>Mauris aliquet egestas metus, id pellentesque mauris tincidunt.</p>
        </div>
        <div className="right">
          <span className="Brand">
            <img src={airBnB} />
          </span>
          <span className="Brand">
            <img src={samsung} />
          </span>
          <span className="Brand">
            <img src={amazon} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Company;
