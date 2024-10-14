import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGear } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer.js";
import laptop1 from "../images/laptop1.jpg";
import laptop2 from "../images/laptop2.jpg";
import laptop3 from "../images/laptop3.jpg";
import laptop4 from "../images/laptop4.jpg";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import Marquee from "../components/Marquee.js";
import { ThemeContext } from "../context/theme.js";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const linkstyle = {
    textDecoration: "none",
    color: theme === "dark" ? "white" : "grey",
  };
  const [accord, setaccord] = useState(1);
  return (
    <>
      <Header />
      <div className="Container2">
        <div className="container-fluid mx-0 px-0">
          <div className="row lightblue my-1 mx-0 w-100">
            {/* Carousel */}
            <div className="row w-100 mx-0 px-0">
              <div className="col-12 col-xl-6 order-2 order-xl-1 ">
                <div className="container p-4 Container3">
                  <h2 className="mb-4 shape text-center text-wrap text-xl-start">
                    Shaping the future through Technology and Innovation
                  </h2>
                  <p className="mb-4 d-none d-xl-block">
                    We deliver seamless tech solutions for your software
                    products
                  </p>
                  <h2 className="text-center text-xl-start">
                    <button
                      type="button"
                      className="btn  btn-lg btn-primary badge rounded-pill text-dark p-3 text-white learn"
                    >
                      Learn more <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </h2>
                </div>
              </div>
              <div className="col-12 col-xl-6 order-1 carousel order-xl-2 d-flex align-items-center">
                <div className="carousel-inner border-radius ps-xl-4 px-0 py-1 my-2 w-100">
                  <Carousel
                    interval={5000}
                    controls={false}
                    className="border-radius"
                    indicators={true}
                    indicatorClassName="carousel-indicators"
                    style={{
                      display: "flex",
                      flexFlow: "flex-row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Carousel.Item>
                      <img
                        src={laptop1}
                        className="d-block w-100"
                        alt="Laptop 1"
                        style={{
                          height: "19rem",
                          objectFit: "cover",
                          borderRadius: "15px",
                        }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={laptop2}
                        className="d-block w-100"
                        alt="Laptop 2"
                        style={{
                          height: "19rem",
                          objectFit: "cover",
                          borderRadius: "15px",
                        }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={laptop3}
                        className="d-block w-100"
                        alt="Laptop 3"
                        style={{
                          height: "19rem",
                          objectFit: "cover",
                          borderRadius: "15px",
                        }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={laptop4}
                        className="d-block w-100"
                        alt="Laptop 4"
                        style={{
                          height: "19rem",
                          objectFit: "cover",
                          borderRadius: "15px",
                        }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 mx-2 blue d-flex align-items-stretch border-radius  flex-row align-items-center text-light">
            <div className="col-xl-4 blues border-radius col-12 my-2 pb-xl-4 ">
              <div className="p-xl-3 w-100 text-wrap text-white border-0">
                <div className="d-flex my-4 align-items-start">
                  <h3 className="icon-container fs-3 me-3 mb-xl-3  mt-xl-2">
                    <FontAwesomeIcon icon={faGear} className="icon fa-spin " />
                  </h3>
                  <div>
                    <h2 className="mb-xl-3  mt-xl-4">Design Solutions</h2>
                    <p className="mb-0 text-wrap  pe-xl-4 me-xl-4">
                      We offer design solutions including branding, logo design
                      and guidelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 blues border-radius col-12 my-2 pb-xl-4 ">
              <div className="p-xl-3 w-100 text-white border-0">
                <div className="d-flex my-4 align-items-start">
                  <h3 className="icon-container fs-3 me-3 mb-xl-3  mt-xl-2">
                    <FontAwesomeIcon icon={faGear} className="icon fa-spin " />{" "}
                  </h3>
                  <div>
                    <h2 className="mb-xl-3  mt-xl-4   ">
                      Software Development
                    </h2>
                    <p className="mb-0 text-wrap  pe-4 me-4">
                      We offer design solutions including branding, logo design
                      and guidelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 blues border-radius col-12 my-2 pb-xl-4 ">
              <div className="p-xl-3 w-100 text-white border-0">
                <div className="d-flex my-4 align-items-start">
                  <h3 className="icon-container fs-3 me-3 mb-xl-3  mt-xl-2">
                    <FontAwesomeIcon icon={faGear} className="icon fa-spin " />{" "}
                  </h3>
                  <div>
                    <h2 className="mb-xl-3  mt-xl-4   ">
                      Software Enginnering{" "}
                    </h2>
                    <p className="mb-0 text-wrap  pe-4 me-4">
                      We offer design solutions including branding, logo design
                      and guidelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ height: "15rem" }} />
          {/*Relevant Projects */}
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
                  <img src={img4} className="card-img-top p-3" />
                  <div className="card-body">
                    <h3 className="">MVAA</h3>
                    <p className="text-secondary d-none d-xl-block pe-4">
                      {" "}
                      We offer design solutions including branding, logo design
                      and guidelines
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className="">Learn more &gt;&gt; </p>
                    </Link>{" "}
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-xl-4 py-2 d-flex align-items-stretch">
                <div className="card border-radius lightblue py-2 w-100">
                  <img src={img5} className="card-img-top p-3" />
                  <div className="card-body">
                    <h3 className="">School Management</h3>
                    <p className="text-secondary d-none d-xl-block pe-4">
                      {" "}
                      We offer design solutions including branding, logo design
                      and guidelines
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className="">Learn more &gt;&gt; </p>
                    </Link>{" "}
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-xl-4 py-2 d-flex align-items-stretch">
                <div className="card border-radius lightblue py-2 w-100">
                  <img src={img6} className="card-img-top p-3" />
                  <div className="card-body">
                    <h3 className="">Lagos Revenue Portal</h3>
                    <p className="text-wrap text-secondary d-none d-xl-block pe-4">
                      {" "}
                      We offer design solutions including branding, logo design
                      and guidelines
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className="">Learn more &gt;&gt; </p>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg custom-btn border-radiuss"
              >
                View all project cases
              </button>
            </div>
          </div>
          <div className="row" style={{ height: "8rem" }} />
          <h4 className="text-secondary text-center"> Trusted By:</h4>
          <div className="row" style={{ height: "5rem" }} />
          <div className="marquee-container d-flex flex-row py-4 justify-content-center align-items-center">
            {/* Marquee */}
            <Marquee />
          </div>
          <div className="row" style={{ height: "10rem" }} />
          <h1 className="text-center">FAQ</h1>
          <div className="row" style={{ height: "3rem" }} />
          <h4 className="text-secondary mb-4 text-center">
            Our most frequently asked questions and answers
          </h4>
          {/* Accordion */}
          <div className="accordion border0" id="accordionExample">
            <div className="accordion-item p-4 mb-3 border0">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button transition head  ${
                    accord == 1 ? `dblue border-radius2` : `border-radius0`
                  } show`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  onClick={() => {
                    if (accord !== 1) {
                      setaccord(1);
                    } else {
                      setaccord(null);
                    }
                  }}
                >
                  <h4 className="">Who is Alliance Consulting?</h4>
                </button>
              </h2>
              <div
                id="collapseOne"
                className={`accordion-collapse transition collapse  ${
                  accord === 1 ? "show" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div
                  className={`accordion-body  border-radius3  ${
                    accord == 1 ? `dblue` : ``
                  }`}
                >
                  <h5>
                    Alliance Consulting is a leading technology consulting firm
                    that specializes in providing innovative software solutions
                    to businesses across various industries. With a team of
                    experienced professionals, we strive to deliver exceptional
                    services that meet the unique needs of our clients.
                  </h5>
                </div>
              </div>
            </div>
            <div className="accordion-item p-4 mb-3 border0">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button transition head border-radius2 collapsed ${
                    accord == 2 ? `dblue border-radius2` : `border-radius0`
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  onClick={() => {
                    if (accord !== 2) {
                      setaccord(2);
                    } else {
                      setaccord(null);
                    }
                  }}
                >
                  <h4> What are the services we provide?</h4>{" "}
                </button>
              </h2>
              <div
                id="collapseTwo"
                className={`accordion-collapse transition collapse ${
                  accord === 2 ? "show" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div
                  className={`accordion-body  border-radius3 ${
                    accord == 2 ? `dblue` : ``
                  }`}
                >
                  <ul className="styled-list">
                    <li className="h5">Custom software development</li>
                    <li className="h5">IT consulting</li>
                    <li className="h5">Digital transformation</li>
                    <li className="h5">Cloud services</li>
                    <li className="h5">Cybersecurity solutions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item p-4 mb-3 border0">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button transition head border-radius2 collapsed ${
                    accord == 3 ? `dblue border-radius2` : `border-radius0`
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  onClick={() => {
                    if (accord !== 3) {
                      setaccord(3);
                    } else {
                      setaccord(null);
                    }
                  }}
                >
                  <h4>How do we do what we do? </h4>{" "}
                </button>
              </h2>
              <div
                id="collapseThree"
                className={`accordion-collapse transition collapse ${
                  accord === 3 ? "show" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div
                  className={`accordion-body  border-radius3 ${
                    accord == 3 ? `dblue` : ``
                  }`}
                >
                  <h5>
                    {" "}
                    We offer design, development and engineering solutions
                    including branding, logo design and guidelines etc{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="accordion-item p-4 mb-3 border0">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button transition head border-radius2 collapsed ${
                    accord == 4 ? `dblue border-radius2` : `border-radius0`
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapsefour"
                  onClick={() => {
                    if (accord !== 4) {
                      setaccord(4);
                    } else {
                      setaccord(null);
                    }
                  }}
                >
                  <h4> How do we manage our software solutions? </h4>{" "}
                </button>
              </h2>
              <div
                id="collapsefour"
                className={`accordion-collapse transition collapse ${
                  accord === 4 ? "show" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div
                  className={`accordion-body  border-radius3 ${
                    accord == 4 ? `dblue` : ``
                  }`}
                >
                  <ul className="styled-list">
                    <li className="h5">
                      Agile project management methodologies
                    </li>
                    <li className="h5">Iterative development and testing</li>
                    <li className="h5">
                      Continuous integration and deployment
                    </li>
                    <li className="h5">Regular monitoring and maintenance</li>
                    <li className="h5">Client feedback and collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item p-4 mb-3 border0 ">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button transition head border-radius2 collapsed ${
                    accord == 5 ? `dblue border-radius2` : `border-radius0`
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                  onClick={() => {
                    if (accord !== 5) {
                      setaccord(5);
                    } else {
                      setaccord(null);
                    }
                  }}
                >
                  <h4> What is our major offering? </h4>{" "}
                </button>
              </h2>
              <div
                id="collapseFive"
                className={`accordion-collapse transition  collapse  ${
                  accord === 5 ? "show" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div
                  className={`accordion-body  border-radius3 ${
                    accord == 5 ? `dblue` : ``
                  }`}
                >
                  <h5>
                    {" "}
                    Our major offering is our proprietary software platform,
                    [Aliance Consulting & Digital Solutions], which is designed
                    to help businesses streamline their operations, improve
                    efficiency, and reduce costs. This platform offers a range
                    of features, including [list key features, such as workflow
                    automation, data analytics, and reporting].{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ height: "5rem" }} />
          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
