import React from "react";
import "./cta.css";

const cta = () => {
  return (
    <div>
      <div className="section footer-cta">
        <div className="cta-foot">
          <h1 className="footerHeader">Download the app now.</h1>
          <p className="footer_para">
            Available on your favorite store. Start your premium experience now
          </p>

          <p className="paraSmallDevice">
            Most calendars are <br/>
            designed for teams.
          </p>
          <div className="button_container mt-5">
            <button className="footer_button1 mr-4">Playstore</button>
            <button className="footer_button2">Appstore</button>
          </div>

          <div className="button_Container2 mt-5">
            <button className="buttonSet1_2 mr-4">Buy Now</button>
            <button className="buttonSet2_2">Try for free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cta;
