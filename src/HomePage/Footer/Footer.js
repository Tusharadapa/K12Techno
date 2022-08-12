import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footerContainer">
          <div className="row" style={{ width: "100vw", paddingBottom: "2%" }}>
            <div className="col-2">
              <img
                src="https://www.k12technoschools.com/images/k12-logo.png"
                alt="footerLogo"
                className="logoImg"
              />
            </div>
            <div
              className="col-8"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <h5
                style={{ color: "#028cca", textAlign: "right" }}
                className="copyrightText"
              >
                Copyrights@2022, K12 Techno Services Pvt Ltd |
                <a href="/" className="privacyPolicy">
                  {" "}
                  Privacy Policy
                </a>
              </h5>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
