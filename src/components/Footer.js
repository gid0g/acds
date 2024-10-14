import React, { useState, useEffect, useContext } from "react";
import mail from "../images/mail.png";
import logo from "../images/logo.png";
import Map from "../components/Map.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelopeOpen,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/theme.js";

function Footer({ show }) {
    const { theme } = useContext(ThemeContext);

  const linkstyle2 = {
    textDecoration: "none",
    color: "white",
  };
  const linkstyle3 = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
  };
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="container-fluid mx-0 px-2">
      {/* Map */}
      {show ? (
        <>
          <div
            className={`row mx-0 w-100 dip ${
              show ? "lightblue3" : "lightblues"
            }`}
          >
            <div className="col-12 col-xl-4 mx-0">
              <div className="">
                <div className="pt-2 my-3 px-2 mx-0 w-100">
                  <h1 className="mb-4">Contact us </h1>

                  <form className="mx-0 px-0">
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Full name{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control bg-secondary-subtle"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ex. John Doe"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control bg-secondary-subtle"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ex. email@mail.com"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="form-floating">
                        <textarea
                          className="form-control bg-secondary-subtle"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label for="floatingTextarea2">Comments</label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary blue blues w-100"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8 p-3 border-radius">
              <Map />
            </div>
          </div>
          <div className="row mt-4 px-2 py-4 mx-0 w-100 blue blues border-radius w-100 text-light">
            <div className="col-xl-4 col-12  mb-xl-4 pb-xl-4">
              <div className="p-xl-3 text-wrap text-white border-0">
                <div className="d-flex my-4 align-items-start">
                  <h3 className="icon-container fs-3 me-3 mb-xl-3  mt-xl-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                  </h3>
                  <div>
                    <h2 className="mb-xl-3  mt-xl-4">Location</h2>
                    <p className="mb-0 text-wrap  pe-xl-4 me-xl-4">
                      NECA House, Hakeem Balogun St. Alausa, Ikeja 101233, Lagos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-12 mb-xl-4 pb-xl-4">
              <div className="p-xl-3 text-white border-0">
                <div className="d-flex my-4 align-items-start">
                  <h3 className="icon-container fs-3 me-3 mb-xl-3  mt-xl-2">
                    <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />{" "}
                  </h3>
                  <div>
                    <h2 className="mb-xl-3 mt-xl-4">Email </h2>
                    <p className="mb-0 text-wrap  pe-4 me-4">
                      info@rogersandco.com
                    </p>
                    <p className="mb-0 text-wrap  pe-4 me-4">
                      contact@rogersandco.com{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-12 mb-xl-4 pb-xl-4">
              <div className="p-xl-3 text-white border-0">
                <div className="d-flex my-4 align-items-start">
                  <h3 className="icon-container fs-3 me-3 mb-xl-3  mt-xl-2">
                    <FontAwesomeIcon icon={faPhoneAlt} className="icon" />{" "}
                  </h3>
                  <div>
                    <h2 className="mb-xl-3 mt-xl-4">Telephone </h2>
                    <p className="mb-0 text-wrap  pe-4 me-4">
                      +234 800 ooo 0000
                    </p>
                    <p className="mb-0 text-wrap  pe-4 me-4">01 234 4567 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={`row dip mx-0 ${show ? "lightblue3" : "lightblues"}`}>
          <div className="col-12 col-xl-6 mb-4">
            <div className="container  Container3">
              <div className="text-wrap mb-4">
                <h1 className="mb-4 ms-4 pt-4">Where we are located </h1>
                <h5 className="text-truncate text-secondary ms-4">
                  NECA House, Hakeem Balogun St. Alausa, Ikeja 101233, Lagos{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 p-2 border-radius">
            <Map />
          </div>
        </div>
      )}

      {/* Newsletter */}
      <div className="row" style={{ height: "5rem" }} />
      <div className="w-100 lightblue2 border-radius px-3">
        <div className="container pad-top">
          <div className="row d-flex flex-row">
            <div className="col-xl-3 col-12 d-flex">
              <img src={mail} alt="newsletter" height="60%" />
            </div>
            <div className="col-xl-9 col-12 my-3 fw-bold">
              <h1 className="mb-4 type1">Join our newsletter</h1>
              <p className="text-secondary type2 py-2">
                Receive recent updates from all our products and projects
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className={`form-control border-radius4 px-3 ${
                    theme === "dark" ? "bg-dark-subtle" : ""
                  }`}
                  placeholder="email@mail.com"
                  aria-label="email@mail.com"
                  aria-describedby="basic-addon2"
                />
                <button
                  className="input-group-text border-radius5 px-3 btn btn-custom"
                  id="basic-addon2"
                >
                  Subscribe{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ height: "10rem" }} />
      {/* footer */}
      <div className="footer w-100 border-radius mb-4">
        <div className="mx-4 py-4 px-4">
          <div className="row d-flex py-4 flex-row">
            <div className="col-xl-5 col-12 pt-4">
              <Link
                to="/"
                className="d-flex align-items-center mb-3"
                style={linkstyle2}
              >
                <h4 className="h4-responsive text-truncate">
                  {" "}
                  <img src={logo} width="10%" />
                  <span className="ps-3">
                    Alliance Consulting & Digital Solutions
                  </span>
                </h4>
              </Link>

              <h6 className="text-light text-wrap">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                NECA House, Hakeem Balogun St. Alausa, Ikeja 101233, Lagos
              </h6>
            </div>
            <div className="col-xl-2 col-12 pt-3">
              <ul className="navbar-nav mb-2 mb-lg-0 fot">
                <li className="nav-item  mb-2">
                  <h4 className="fw-bolder text-truncate text-light h4-responsive ">
                    Company
                  </h4>
                </li>
                <li className="nav-item  mb-2">
                  <h5 className="text-truncate">
                    <Link to="/about" className="type5 " style={linkstyle3}>
                      About
                    </Link>
                  </h5>
                </li>
                <li className="nav-item  mb-2">
                  <h5 className="text-truncate">
                    <Link to="" className="type5" style={linkstyle3}>
                      Services
                    </Link>
                  </h5>
                </li>
                <li className="nav-item  mb-2">
                  <h5 className="text-truncate">
                    <Link to="" className="type5" style={linkstyle3}>
                      Products
                    </Link>
                  </h5>
                </li>
                <li className="nav-item  mb-2">
                  <h5 className="text-truncate">
                    <Link to="" className="type5" style={linkstyle3}>
                      Clients & Partners
                    </Link>
                  </h5>
                </li>
                <li className="nav-item  mb-2">
                  <h5 className="text-truncate">
                    <Link to="" className="type5" style={linkstyle3}>
                      Contact
                    </Link>
                  </h5>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-12 pt-3 px-2">
              <ul className="navbar-nav mb-2 mb-lg-0 fot">
                <li className="nav-item  mb-2">
                  <h4 className="fw-bolder text-truncate text-light ">
                    Development
                  </h4>
                </li>
                <li className="nav-item  mb-2">
                  <h5 className="text-truncate">
                    <Link to="" className="type5 " style={linkstyle3}>
                      Product design
                    </Link>
                  </h5>
                </li>
                <li className="nav-item  mb-2">
                  <h5 className="text-truncate">
                    <Link to="" className="type5" style={linkstyle3}>
                      Full stack
                    </Link>
                  </h5>
                </li>
                <li className="nav-item  mb-2">
                  <h5 className="text-truncate">
                    <Link to="" className="type5" style={linkstyle3}>
                      Mobile development
                    </Link>
                  </h5>
                </li>
                <li className="nav-item  mb-2">
                  <h5 className="text-truncate">
                    <Link to="" className="type5" style={linkstyle3}>
                      QA{" "}
                    </Link>
                  </h5>
                </li>
              </ul>
            </div>

            <div className="col-xl-3 col-12 pt-3 text-light">
              <h4 className="fw-bolder  mb-3 h4-responsive">Products</h4>
              <div className="row fot ">
                <h5 className="text-truncate col-6  mb-3">RevBill</h5>
                <h5 className="text-truncate col-6  mb-3">ERP</h5>
                <h5 className="text-truncate col-6  mb-3">LASEPA</h5>
                <h5 className="text-truncate col-6  mb-3">HMS</h5>
                <h5 className="text-truncate col-6  mb-3">LRP</h5>
                <h5 className="text-truncate col-6  mb-3">ERP</h5>
                <h5 className="text-truncate col-6  mb-3">LASEPA</h5>
                <h5 className="text-truncate col-6  mb-3">HMS</h5>
              </div>
            </div>
          </div>
          <hr style={{ color: "white" }} />
          <h4 className="text-center text-light  ">
            {" "}
            {year} Alliance Consulting & Digital Solutions - All rights
            reserved.
          </h4>
        </div>
        <div className="row" style={{ height: "4rem" }} />
      </div>
    </div>
  );
}

export default Footer;
