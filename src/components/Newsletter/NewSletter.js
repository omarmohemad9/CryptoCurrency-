import React from "react";
import "./NewSletter.css";
function NewSletter() {
  return (
    <div className="News" id="Scroll">
      <div className="container">
        <div className="left">
          <h2>Newsletter</h2>
          <p>Mauris aliquet egestas metus, id pellentesque mauris tincidunt.</p>
        </div>
        <div className="right">
          <div>
            <input type="text" placeholder="Enter Your Email" />
            <button>
              Subscribe Now
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

export default NewSletter;
