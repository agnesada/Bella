import React from "react";
import "./hero.css";
import HeroImage2 from "../../assets/heroImage2.svg";

const hero = () => {
  return (
    <div>
      <div className="section hero-cta mt-3 positionRelative">
        <p className="paraMini">Food app</p>
        <h1 className="heroHeader">
          Why stay hungry when <br />
          you can order from Bella Onojie
        </h1>
        <p className="para">Download the bella onoje's food app now on</p>
        <div className="buttonContainer mt-5">
          <button className="buttonSet1 mr-4">Playstore</button>
          <button className="buttonSet2">Appstore</button>
        </div>
      </div>

      <div className="phoneMockup">
        <img className="ctaImage2" src={HeroImage2} />
      </div>
    </div>
  );
};

export default hero;
