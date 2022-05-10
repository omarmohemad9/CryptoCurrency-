import React from "react";
import "./Service.css";
function ServiceIn() {
  return (
    <div className="Service-Section AllSections">
      <div className="container">
        <div className="left">
          <h1>Service</h1>
          <p>Mauris aliquet egestas metus, id pellentesque mauris tincidunt.</p>
        </div>
        <div className="right">
          <div>
            <input type="text" placeholder="Search Service" />
            <button className="expetional">
              Hire Now
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  fill="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M1 1L9 9.5L1 18"
                    stroke="#282828"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceIn;
