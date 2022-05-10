import React from "react";
import "./Footer.css";
import EmailIcon from "../../images/small icons/Email2.png";
import PhoneIcon from "../../images/small icons/phone.png";

function Footer() {
  return (
    <div className="Footer ">
      <div className="container">
        <div className="Left">
          <h3 className="xdes">Get in touch with us</h3>
          <p className="scx2">
            Whether you want to learn about UX or need product design services
            let us help with your challenge.
          </p>
          <div className="Bottom_Section">
            <div>
              <img src={EmailIcon} />
              <h3>hello@uxstudioteam.com</h3>
            </div>
            <div>
              <img src={PhoneIcon} />
              <h3>+36 20 516 9779</h3>
            </div>
          </div>
        </div>
        <div className="Right">
          <h2> Contact Form</h2>
          <form action="#">
            <div className="topInput">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <input type="Email" placeholder="Email address" className="full" />
            <input type="text" placeholder="subject" className="full" />
            <textarea
              width="375px"
              placeholder="Massage"
              rows="10"
              cols="50"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
