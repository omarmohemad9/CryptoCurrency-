import React from "react";
import "./SkillS.css";
import sourceC from "../../images/charts.png";

function SkillS() {
  return (
    <div className="SkillSection AllSections">
      <div className="container">
        <div className="LeftS">
          <img src={sourceC} alt="notFound" />
        </div>
        <div className="RightS">
          <h1>My Best Skills</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nullam
            placerat est quis lorem tristique aliquet cras quis tristique felis
            vitae eleifend sapien.
          </p>
          <div className="Boxs-Skills">
            <div>
              <h4>Ui-Ux Design</h4>
              <h1> 98%</h1>
            </div>
            <div>
              <h4>Animation</h4>
              <h1> 95%</h1>
            </div>
            <div>
              <h4>Graphic Design</h4>
              <h1> 96%</h1>
            </div>
            <div>
              <h4>Front End</h4>
              <h1> 100%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillS;
