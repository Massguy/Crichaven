import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faPhone,
  faClock,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
library.add(faCompass, faEnvelope, faPhone, faClock);
const Footer = () => {
  return (
    <div className="bck_b_dark">
      <div className="container">
        <div className="logo">CricHaven</div>
        <div className="wrapper">
          <div className="left">
            <h2>Contact Info</h2>
            <div className="business_nfo">
              <div className="tag">
                <FontAwesomeIcon icon="compass" className="icon" />
                <div className="nfo">
                  <p>Address:76 unknown street U8 9TH</p>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon icon="phone" className="icon" />
                <div className="nfo">
                  <p>Phone:398749274823</p>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon icon="clock" className="icon" />
                <div className="nfo">
                  <p>Working Hours:8am/5pm</p>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon icon="envelope" className="icon" />
                <div className="nfo">
                  <p>email:unknown@crixhaven.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <h3>NewsLetter</h3>
            <p>be the first to know all things</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
