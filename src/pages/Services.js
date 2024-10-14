import React, { useContext } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { Link, useLocation } from "react-router-dom";
import code from "../images/code.png";
import tick from "../images/tick.png";
import db from "../images/db.png";
import thanos from "../images/thanos.png";
import bracket from "../images/bracket.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import { ThemeContext } from "../context/theme.js";

function Services() {
  const { theme } = useContext(ThemeContext);

  const linkstyle = {
    textDecoration: "none",
  };
  return (
    <>
      <Header current="services" />
      <div className="Container2">
        <div className="container-fluid px-3">
          <div className="d-flex justify-content-center mt-1 mb-4">
            <button
              type="button"
              disabled
              className="btn btn-outline-secondary btn-lg border-radius"
            >
              Services{" "}
            </button>
          </div>
          <div className="d-xl-none">
            <div className="col-12">
              <img
                src={code}
                className="d-block border-radius w-100"
                alt="Laptop 2"
                style={{
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="col-12 my-4">
              <h1 className="text-center fs-1 my-3">
                Good service creates <span className="tip">culture. </span>{" "}
              </h1>
              <h4 className="text-center text-secondary my-2">
                With a proven track record of excellence, we are dedicated to
                guiding <br />
                our clients through every step of their technological journey.
              </h4>
            </div>
            <div className="col-12">
              <div class="card backgroundC backgroundCs border-radius border-0">
                <div class="card-body mx-3 d-flex">
                  <img
                    src={tick}
                    className="d-block border-radius my-4 p-0"
                    alt="Laptop 2"
                    style={{
                      height: "4rem",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mx-3">
                    <h1 class="card-text txts fw-semibold">15+</h1>
                    <h4 class="card-text fs-xl-3 fw-semibold  text-secondary">
                      Digital products{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-xl-block">
            <h1 className="text-center fs-1">
              Good service creates <span className="tip">culture. </span>{" "}
            </h1>
            <h4 className="text-center text-secondary">
              With a proven track record of excellence, we are dedicated to
              guiding <br />
              our clients through every step of their technological journey.
            </h4>
            <div className="row" style={{ height: "4rem" }} />
            <div className="row">
              <div className="col-12 col-md-6 my-2 col-xl-9">
                <img
                  src={code}
                  className="d-block border-radius w-100"
                  alt="Laptop 2"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <div className="col-12 col-md-6 my-2 col-xl-3">
                <div class="card backgroundC">
                  <div class="card-body ms-2 mt-3">
                    <img
                      src={tick}
                      className="d-block border-radius mb-2 p-0"
                      alt="Laptop 2"
                      style={{
                        height: "4rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <h1 class="card-text txt fw-semibold my-4">15+</h1>
                    <h4 class="card-text fs-3 fw-semibold py-4 text-secondary">
                      Digital products{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ height: "4rem" }} />
          </div>
          {/* midsection */}

          <div className="row mt-xl-4 backgroundC border-radius">
            <div className="col-xl-4 backgroundCs py-3 border-radius col-lg-12 mt-4 my-xl-4 py-xl-4">
              <div className="p-xl-3 text-wrap  border-0">
                <div className="d-flex align-items-start">
                  <h3 className="icon-container fs-3 me-3 mb-xl-3  mt-xl-2">
                    <img
                      src={db}
                      className="d-block border-radius p-0"
                      alt="Laptop 2"
                      style={{
                        height: "3rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />{" "}
                  </h3>
                  <div className="text-truncate">
                    <h2 className="mb-xl-3  mt-xl-4 text-truncate">
                      Database Management
                    </h2>
                    <p className="mb-0 text-wrap  pe-xl-4 me-xl-4">
                      Designing and maintaining databases to store, organize,
                      and manage data efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 backgroundCs py-3 border-radius col-lg-12 mt-4 my-xl-4 py-xl-4">
              <div className="p-xl-3 text-wrap  border-0">
                <div className="d-flex align-items-start">
                  <h3 className="icon-container fs-3 me-3 mb-xl-3  mt-xl-2">
                    <img
                      src={thanos}
                      className=""
                      alt="Laptop 2"
                      style={{
                        height: "3rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />{" "}
                  </h3>

                  <div className="text-truncate">
                    <h2 className="mb-xl-3  mt-xl-4 text-truncate">
                      Web App Development
                    </h2>
                    <p className="mb-0 text-wrap  pe-xl-4 me-xl-4">
                      Design and develop scalable web applications to meet up
                      with current industry demands
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 backgroundCs py-3 border-radius col-lg-12 mt-4 my-xl-4 py-xl-4">
              <div className="p-xl-3 text-wrap  border-0">
                <div className="d-flex align-items-start">
                  <h3 className="icon-container fs-3 me-3 mb-xl-3  mt-xl-2">
                    <img
                      src={bracket}
                      className="d-block border-radius p-0"
                      alt="Laptop 2"
                      style={{
                        height: "3rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />{" "}
                  </h3>

                  <div className="text-truncate">
                    <h2 className="mb-xl-3  mt-xl-4 text-truncate">
                      Mobile App Development
                    </h2>
                    <p className="mb-0 text-wrap  pe-xl-4 me-xl-4">
                      Developing mobile applications for iOS and Android
                      platforms. React native, Flutter etc...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ height: "13rem" }} />
          <div className="row mt-3 text-secondary">
            <div className="col-xl-7 col-12 ">
              <h1 className="shape text-dark ">It's not magic. </h1>{" "}
              <h1 className="shape text-success">
                It's years of hard and smart work{" "}
              </h1>
            </div>
            <div className="col-xl-5 col-12">
              <p>
                {" "}
                Alliance Consulting. is a leading technology organization at the
                forefront of delivering seamless solutions for both software and
                hardware projects.
              </p>
              <p>
                With a proven track record of excellence, we are dedicated to
                guiding our clients through every step of their technological
                journey.
              </p>
              <p>
                We offer a comprehensive range of cutting edge services to meet
                the diverse needs Of our clients.
              </p>
            </div>
          </div>
          <div className="row" style={{ height: "8rem" }} />
          {/* projects */}
          <div className="row w-100 mx-0">
            <h1 className="text-center mb-3">Relevant Project Cases</h1>
            <h5 className="text-center mb-4 text-secondary">
              We offer design solutions including branding, logo design and
              guidelines{" "}
            </h5>

            <div className="row mt-4 pt-4 mx-0 px-2">
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-xl-4 py-2 d-flex align-items-stretch">
                <div className="card border-radius lightblue py-2 w-100">
                  <img src={img1} className="card-img-top p-3" />
                  <div className="card-body">
                    <h3 className="">LASEPA</h3>
                    <p className="text-secondary d-none d-xl-block">
                      Lagos State Environmental Protection Agency web
                      application crafted to streamline for the state
                      governments
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className=" p-0">Learn more &gt;&gt; </p>
                    </Link>{" "}
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-xl-4 py-2 d-flex align-items-stretch">
                <div className="card border-radius lightblue py-2 w-100">
                  <img src={img3} className="card-img-top p-3" />
                  <div className="card-body">
                    <h3 className="">LandRev</h3>
                    <p className="text-secondary d-none d-xl-block ">
                      Crafted to automate the processes within the LANDS Bureau,
                      ensuring a seamless experience for the agency and general
                      public.
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className=" p-0 ">Learn more &gt;&gt; </p>
                    </Link>{" "}
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-xl-4 py-2 d-flex align-items-stretch">
                <div className="card border-radius lightblue py-2 w-100">
                  <img src={img2} className="card-img-top p-3" />
                  <div className="card-body">
                    <h3 className="">Smart-HMS</h3>
                    <p className="text-secondary d-none d-xl-block pe-4">
                      Smart Hospital Management System is an initiative aimed at
                      digitalising the Hospitals' paper system{" "}
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className="">Learn more &gt;&gt; </p>
                    </Link>{" "}
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-xl-4 py-2 d-flex align-items-stretch">
                <div className="card border-radius lightblue py-2 w-100">
                  <img src={img3} className="card-img-top p-3" />
                  <div className="card-body">
                    <h3 className="">LandRev</h3>
                    <p className="text-secondary d-none d-xl-block ">
                      Crafted to automate the processes within the LANDS Bureau,
                      ensuring a seamless experience for the agency and general
                      public.
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className=" p-0 ">Learn more &gt;&gt; </p>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg custom-btn border-radius"
              >
                View all project cases
              </button>
            </div>
          </div>
          <div className="row" style={{ height: "13rem" }} />

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Services;
