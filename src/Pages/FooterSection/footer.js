import React from "react";
import "./footer.css";
import Logo from "../../assets/Bella Olonje logo.svg"
import Social from "../../assets/Socials.png"

const footer = () => {
  return (
    <div>
      <div className="container align">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
            <img className="footerLogo" src={Logo} />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <img className="socialsSize" src={Social} />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <p className="copyright">Copywright 2020 Bella Onojie.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
