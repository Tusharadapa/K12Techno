import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://www.k12technoschools.com/images/k12-logo.png"
            alt="LOGO"
          />
        </div>
        <div className="push-left">
          <button
            id="menu-toggler"
            data-class="menu-active"
            className="hamburger"
          >
            <span className="hamburger-line hamburger-line-top" />
            <span className="hamburger-line hamburger-line-middle" />
            <span className="hamburger-line hamburger-line-bottom" />
          </button>

          <ul id="primary-menu" className="menu nav-menu">
            <li className="menu-item current-menu-item">
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="menu-item dropdown">
              <Link className="nav__link" to="/AboutUs">
                About us
              </Link>
            </li>
            <li className="menu-item dropdown">
              <Link className="nav__link" to="/">
                Services <i class="fa-solid fa-caret-down"></i>
              </Link>
              <ul className="sub-nav listRight">
                <li>
                  <Link className="sub-nav__link" to="/InfraStructureSetup">
                    Infrastructure Setup
                  </Link>
                </li>
                <li>
                  <Link className="sub-nav__link" to="/MarketingSales">
                    Marketing/Sales
                  </Link>
                </li>
                <li>
                  <Link
                    className="sub-nav__link"
                    to="/CurriculumImplementation"
                  >
                    Curriculum Implementation
                  </Link>
                </li>
                <li>
                  <Link className="sub-nav__link" to="/AdministrativeSupport">
                    Administrative Support
                  </Link>
                </li>
                <li>
                  <Link className="sub-nav__link" to="/TechnologySupport">
                    Technology Support
                  </Link>
                </li>
                <li>
                  <Link
                    className="sub-nav__link"
                    to="/AffiliationPermissionSupport"
                  >
                    Affiliation and Permission Support
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
