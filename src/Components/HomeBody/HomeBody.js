import React from "react";
import "./HomeBody.css";

const HomeBody = () => {
  return (
      <div className="container-xxl py-2 bg-dark hero-header">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="text-white">
                Made With <span>Love</span>
                <br />
                Restaurant <span>Food</span>
                <br />
                Street <span>Food</span>
              </h1>
              <h4 className="text-white mb-4 pb-2">
                Hey have you lost your weight!! Hurray you can found it again in{" "}
                <span>Petuk.Ji</span>
              </h4>
              <a href="#0" className="btn btn-primary py-sm-3 px-sm-5 me-3">
                Order Now
              </a>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img
                className="img-fluid py-md-5 py-sm-5 py-xs-5"
                src="../images/hero.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomeBody;
