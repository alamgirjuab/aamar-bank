import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero">
      <h1 className="text-center text-white banner-text">
        Compare Rates, Check Eligibility & <br /> Apply
      </h1>
      <div className="container banner-card d-flex">
        <div className="card card-item loan">
          <h4 className="pt-3 px-2">Loan</h4>
          <div className="card-body"></div>
        </div>
        <div className="card card-item deposit">
          <h4 className="pt-3 px-2">Deposit</h4>
          <div className="card-body"></div>
        </div>
        <div className="card card-item credit-card">
          <h4 className="pt-3 px-2">Credit Card</h4>
          <div className="card-body"></div>
        </div>
        <div className="card card-item insurance">
          <h4 className="pt-3 px-2">Insurance</h4>
          <div className="card-body"></div>
        </div>
        <div className="card card-item prize-bond">
          <h4 className="pt-3 px-2">Prize Bond</h4>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
