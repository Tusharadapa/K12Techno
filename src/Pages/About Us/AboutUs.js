import React from "react";
import "./AboutUs.css";
import Header from "../../HomePage/Header/Header";
import Footer from "../../HomePage/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section>
        <div className="col-lg-12">
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
              paddingTop: "5rem",
              textAlign: "center",
            }}
          >
            About Us
          </h1>
        </div>
        <div className="container">
          <div className="col-lg-12" style={{ padding: "5px 10px" }}>
            <p className="aboutPara">
              K12 Techno Services Pvt. Ltd. is a leading education service
              provider in India, offering a dynamic suite of academic support,
              services and solutions to schools. The education sector has
              extensively evolved in the last decade. Hence, the academic needs
              of students and parents have also grown consequently. The upgraded
              teaching methodologies, blended with effective use of technology
              has been the main idea behind K12 i.e. to pave the way for a
              global approach towards education. K12 with its band of services,
              facilitate schools to leverage on its strength.
            </p>
          </div>
        </div>
        <a href="https://k12technoservices.com/">
          <div style={{ textAlign: "center", paddingTop: "10px" }}>
            <button type="button" className="btn btnInfo k12Btn">
              Know More About K12
            </button>
          </div>
        </a>
        <div
          className="container-fluid"
          style={{ background: "#f09e1f", padding: "2rem 0 3rem" }}
        >
          <div className="container">
            <div className="col-lg-12" style={{ textAlign: "center" }}>
              <h1
                style={{
                  color: "white",
                  alignItems: "center",
                  paddingBottom: "2rem",
                  fontWeight: "800",
                }}
              >
                Investors
              </h1>
            </div>
            <div
              className="row"
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="col-md-4 investorIcon">
                <img
                  src="https://www.k12technoschools.com/images/sequoia-logo.png"
                  alt="Inves1"
                  className="investorLogo"
                />
              </div>
              <div className="col-md-4 investorIcon">
                <img
                  src="https://www.k12technoschools.com/images/navneet-logo.png"
                  alt="Inves2"
                  className="investorLogo"
                />
              </div>
              <div className="col-md-4 investorIcon">
                <img
                  src="https://www.k12technoschools.com/images/sofina-logo.png"
                  alt="Inves3"
                  className="investorLogo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              paddingTop: "5rem",
              color: "black",
              fontWeight: "800 !important",
            }}
          >
            Our Verticals
          </h2>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
