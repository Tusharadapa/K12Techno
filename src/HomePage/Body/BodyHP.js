import React from "react";
import "./BodyHP.css";

const BodyHP = () => {
  return (
    <>
      <a href="#">
        <div className="container-fluid hero"></div>
      </a>
      <h1 className="headingMP">
        Our Expertise (End to End School Management)
      </h1>
      <div className="container" style={{ alignItems: "center" }}>
        <div
          className="row"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="col-lg-4 col-md-6 col-sm-12 orange-bg-icon">
            <img
              src="https://www.k12technoschools.com/images/infra-blue.png"
              alt="InfraSetup"
              className="blueImg"
            />
            <h5
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: "15px",
              }}
            >
              Infrastructure Setup
            </h5>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 orange-bg-icon">
            <img
              src="https://www.k12technoschools.com/images/marketing-blue.png"
              alt="Marketing"
              className="blueImg"
            />
            <h5
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: "15px",
              }}
            >
              Marketing/Sales
            </h5>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 orange-bg-icon">
            <img
              src="https://www.k12technoschools.com/images/cirriculum-blue.png"
              alt="Curriculum"
              className="blueImg"
            />
            <h5
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: "15px",
              }}
            >
              Curriculum Implementation
            </h5>
          </div>
        </div>
        <div
          className="row"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="col-lg-4 col-md-6 col-sm-12 orange-bg-icon">
            <img
              src="https://www.k12technoschools.com/images/adm-blue.png"
              alt="InfraSetup"
              className="blueImg"
            />
            <h5
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: "15px",
              }}
            >
              Administrative Support
            </h5>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 orange-bg-icon">
            <img
              src="https://www.k12technoschools.com/images/tech-blue.png"
              alt="Marketing"
              className="blueImg"
            />
            <h5
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: "15px",
              }}
            >
              Technology Integration
            </h5>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 orange-bg-icon">
            <img
              src="https://www.k12technoschools.com/images/affili-blue.png"
              alt="Curriculum"
              className="blueImg"
            />
            <h5
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: "15px",
              }}
            >
              Affiliation and Permission
            </h5>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ textAlign: "center", paddingTop: "20px" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "900",
            paddingBottom: "12px",
          }}
        >
          Our Credentials
        </h2>

        <h3 className="blueSubH3">
          Our core strength lies in delivering an exceptional academic and non
          academic solution to schools.
        </h3>

        <div className="row">
          <div className="col-md-2">
            <img
              src="https://www.k12technoschools.com/images/karnataka.png"
              alt="kar"
              className="stateImg"
            />
            <h3 className="stateH3">KARNATAKA</h3>
          </div>
          <div className="col-md-2">
            <img
              src="https://www.k12technoschools.com/images/telagana.png"
              alt="kar"
              className="stateImg"
            />
            <h3 className="stateH3">TELANGANA</h3>
          </div>
          <div className="col-md-2">
            <img
              src="https://www.k12technoschools.com/images/maharastra.png"
              alt="kar"
              className="stateImg"
            />
            <h3 className="stateH3">MAHARASHTRA</h3>
          </div>
          <div className="col-md-2">
            <img
              src="https://www.k12technoschools.com/images/tamilnadu.png"
              alt="kar"
              className="stateImg"
            />
            <h3 className="stateH3">TAMILNADU</h3>
          </div>
          <div className="col-md-2">
            <img
              src="https://www.k12technoschools.com/images/hariyana.png"
              alt="kar"
              className="stateImg"
            />
            <h3 className="stateH3">HARYANA</h3>
          </div>
          <div className="col-md-2">
            <img
              src="https://www.k12technoschools.com/images/west-bengal.png"
              alt="kar"
              className="stateImg"
            />
            <h3 className="stateH3">WEST BENGAL</h3>
          </div>
        </div>

        <h4 className="orangeBgBtn">
          {" "}
          50+ Schools, 40,000 Students, 6+ States & 5000+ Teachers{" "}
        </h4>
      </div>

      <div style={{ textAlign: "center", paddingTop: "47px" }}>
        <button type="button" className="btn btn-info atb-btn">
          MORE ABOUT US
        </button>
      </div>
    </>
  );
};

export default BodyHP;
