import React from "react";
import "./features.css";
import FeatureLine from "../../assets/bella line.png";
import FeaturesImages1 from "../../assets/mockup1.svg";
import FeaturesImages2 from "../../assets/mockup2.svg";
import FeaturesImages3 from "../../assets/mockup3.svg";

function features() {
  return (
    <div>
      <div className="container">
        <div className="imageDiv ">
          <img className="feat-Line" src={FeatureLine} />
          <h1 className="HIW">How the app works</h1>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div>
              <img src={FeaturesImages1} />
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 margin-auto">
            <p className="paraHeader">Create an account</p>
            <h2 className="featureHeader">
              Create/login to an existing account to get started
            </h2>
            <p className="featurePara">
              An account is created with your email and a desired password
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 margin-auto">
            <p className="paraHeader">Explore varieties</p>
            <h2 className="featureHeader">
              Shop for your favorites meal as e dey hot.
            </h2>
            <p className="featurePara">
              Shop for your favorite meals or drinks and enjoy while doing it.
            </p>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div>
              <img src={FeaturesImages2} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div>
              <img src={FeaturesImages3} />
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 margin-auto">
            <p className="paraHeader">Checkout</p>
            <h2 className="featureHeader">
              When you done, check out and get it delivered.
            </h2>
            <p className="featurePara">
              When you done, check out and get it delivered with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default features;
