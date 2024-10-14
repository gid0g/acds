import React, { useContext } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { Link, useLocation } from "react-router-dom";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import { ThemeContext } from "../context/theme.js";

function Products() {
  const { theme } = useContext(ThemeContext);

    const linkstyle = {
      textDecoration: "none",
      color: theme === "dark" ? "white" : "#4f81ec",
    };
  return (
    <>
      <Header current="products" />
      <div className="Container2">
        <div className="container-fluid px-xl-3 mx-0 px-0">
          <div className="d-flex justify-content-center mt-1 mb-4">
            <button
              type="button"
              disabled
              className="btn btn-outline-secondary btn-lg border-radius"
            >
              Products{" "}
            </button>
          </div>
          {/* hero */}
          <div className="row mt-4 pt-3 text-secondary px-2">
            <div className="col-xl-7 col-12 my-3 ">
              <h1 className="shape text-dark text-center text-xl-start">
                A product is like humor.{" "}
              </h1>{" "}
              <h1 className="shape text-success text-center text-xl-start">
                When you have to explain it, it's bad.{" "}
              </h1>
            </div>
            <div className="col-xl-5 col-12 my-3 ">
              <p>
                {" "}
                Alliance Consulting is a leading technology organisation at the
                forefront of delivering seamless solutions for both software and
                hardware projects.
              </p>
              <p>
                With a proven track record of excellence. we are dedicated to
                guiding our clients through every step of their technological
                journey.
              </p>
              <p>
                We offer a comprehensive range of cutting edge services to meet
                the diverse needs of our clients.
              </p>
            </div>
          </div>
          <div className="row" style={{ height: "4rem" }} />
          {/* products */}
          {/* <div className="row">
            <h1 className="text-center mb-3">Project Cases</h1>
            <h6 className="text-center mt-4 text-secondary">
              We offer design solutions including branding, logo design and
              guidelines
            </h6>
            <div className="row mt-4 pt-4 d-flex flex-row justify-content-around align-items-center">
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-4">
                <div className="card border-radius lightblue py-2 h-100 w-100">
                  <img src={img1} className="card-img-top p-3" />
                  <div className="card-body">
                    <h2 className="card-title">LASEPA</h2>
                    <p className="card-text text-secondary d-none d-xl-block">
                      Lagos State Environmental Protection Agency web
                      application crafted to streamline for the state
                      governments
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className="p-0 ">
                        Learn more &gt;&gt;
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-4">
                <div className="card border-radius lightblue pt-2 h-100 w-100">
                  <img src={img2} className="card-img-top p-3" />
                  <div className="card-body">
                    <h2 className="card-title">LandRev</h2>
                    <p className="card-text text-secondary d-none d-xl-block">
                      Crafted to automate the processes within the LANDS Bureau,
                      ensuring a seamless experience for the agency and general
                      public.
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className="p-0 ">
                        Learn more &gt;&gt;
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-4">
                <div className="card border-radius lightblue py-2 h-100 w-100">
                  <img src={img3} className="card-img-top p-3" />
                  <div className="card-body">
                    <h2 className="card-title">Smart-HMS</h2>
                    <p className="card-text text-secondary pe-4 d-none d-xl-block">
                      Smart Hospital Management System is an initiative aimed at
                      digitalising the Hospitals' paper system
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className="">
                        Learn more &gt;&gt;
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-4">
                <div className="card border-radius lightblue py-2 h-100 w-100">
                  <img src={img1} className="card-img-top p-3" />
                  <div className="card-body">
                    <h2 className="card-title">LASEPA</h2>
                    <p className="card-text text-secondary d-none d-xl-block">
                      Lagos State Environmental Protection Agency web
                      application crafted to streamline for the state
                      governments
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className="p-0 ">
                        Learn more &gt;&gt;
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-4">
                <div className="card border-radius lightblue pt-2 h-100 w-100">
                  <img src={img2} className="card-img-top p-3" />
                  <div className="card-body">
                    <h2 className="card-title">LandRev</h2>
                    <p className="card-text text-secondary d-none d-xl-block">
                      Crafted to automate the processes within the LANDS Bureau,
                      ensuring a seamless experience for the agency and general
                      public.
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className="p-0 ">
                        Learn more &gt;&gt;
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 col-lg-6  mb-lg-4 p-4">
                <div className="card border-radius lightblue py-2 h-100 w-100">
                  <img src={img3} className="card-img-top p-3" />
                  <div className="card-body">
                    <h2 className="card-title">Smart-HMS</h2>
                    <p className="card-text text-secondary pe-4 d-none d-xl-block">
                      Smart Hospital Management System is an initiative aimed at
                      digitalising the Hospitals' paper system
                    </p>
                    <Link to="" style={linkstyle}>
                      <p className="">
                        Learn more &gt;&gt;
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row w-100 mx-0">
            <h1 className="text-center mb-3">Project Cases</h1>
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
            <div className="d-flex justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg custom-btn border-radiuss"
              >
                View all project cases
              </button>
            </div>
          </div>
          <div className="row" style={{ height: "12rem" }} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Products;
