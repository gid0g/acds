import React, { useContext } from "react";
import hero from "../images/hero.jpg";
import Header from "../components/Header.js";
import per from "../images/%.png";
import profile from "../images/person.png";
import tick from "../images/tick.png";
import kemi from "../images/kemi.jpg";
import Ejiro from "../images/Ejiro.jpg";
import leke from "../images/leke.jpg";
import titi from "../images/titi.jpg";
import Joe from "../images/Joe.jpg";
import obinna from "../images/obinna.jpg";
import gbo from "../images/gbo.jpg";
import kazim from "../images/kazim.png";
import Footer from "../components/Footer.js";
import { ThemeContext } from "../context/theme.js";

const AboutPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header current="about" />
      <div className="Container2">
        <div className="container-fluid px-3">
          <div className="d-flex justify-content-center mt-1 mb-4">
            <button
              type="button"
              disabled
              className="btn btn-outline-secondary btn-lg border-radius"
            >
              About us{" "}
            </button>
          </div>

          <div className="d-xl-none">
            <div className="col-12">
              <img
                src={hero}
                className="d-block border-radius w-100"
                alt="Laptop 2"
                style={{
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="col-12 my-4 text-secondary">
              <h1 className="shape">We are a digital agency. </h1>{" "}
              <h1 className="shape text-success green">
                Where creativity meets purpose.{" "}
              </h1>
            </div>
            <div className="col-12 my-4 text-secondary">
              <p>
                {" "}
                Alliance Consulting is a leading technology organisation at the
                forefront of delivering software
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
            <div className="row" style={{ height: "4rem" }} />

            <div className="col-12">
              <div className="row">
                <div className="col-6 mb-4 d-flex align-items-stretch">
                  <div class="card backgroundC w-100">
                    <div class="card-body">
                      <div className="mb-4">
                        <img
                          src={tick}
                          className="d-block border-radius mb-2 p-0"
                          alt="Laptop 2"
                          style={{
                            height: "4rem",
                            objectFit: "center",
                            borderRadius: "15px",
                          }}
                        />
                        <h1 class="fw-semibold ">40+</h1>
                        <h4 class="fs-4 fw-semibold py-3 text-secondary">
                          Projects completed
                        </h4>
                      </div>
                      <div className="mt-4">
                        {" "}
                        <img
                          src={profile}
                          className="d-block border-radius mb-2 p-0"
                          alt="Laptop 2"
                          style={{
                            height: "4rem",
                            objectFit: "center",
                            borderRadius: "15px",
                          }}
                        />
                        <h1 class="fw-semibold ">17+</h1>
                        <h4 class="fs-4 fw-semibold py-3 text-secondary">
                          Clients
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 mb-4 d-flex align-items-stretch">
                  <div class="card backgroundC w-100">
                    <div class="card-body">
                      <div className="mb-4">
                        <img
                          src={per}
                          className="d-block img-fluid border-radius mb-2 p-0"
                          alt="Laptop 2"
                          style={{
                            height: "4rem",
                            objectFit: "center",
                            borderRadius: "15px",
                          }}
                        />
                        <h1 class="fw-semibold ">98.9%</h1>
                        <h4 class="fs-4 fw-semibold py-3 text-secondary">
                          Client rating
                        </h4>
                      </div>
                      <div className="mt-4">
                        {" "}
                        <img
                          src={profile}
                          className="d-block border-radius mb-2 p-0"
                          alt="Laptop 2"
                          style={{
                            height: "4rem",
                            objectFit: "center",
                            borderRadius: "15px",
                          }}
                        />
                        <h1 class="fw-semibold ">20+</h1>
                        <h4 class="fs-4 fw-semibold py-3 text-secondary">
                          Team
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-xl-block">
            <div className="row mt-3 text-secondary">
              <div className="col-7">
                <h1 className="shape">We are a digital agency. </h1>{" "}
                <h1 className="shape text-success green">
                  Where creativity meets purpose.{" "}
                </h1>
              </div>
              <div className="col-5">
                <p>
                  {" "}
                  Alliance Consulting is a leading technology organisation at
                  the forefront of delivering software
                </p>
                <p>
                  With a proven track record of excellence. we are dedicated to
                  guiding our clients through every step of their technological
                  journey.
                </p>
                <p>
                  We offer a comprehensive range of cutting edge services to
                  meet the diverse needs of our clients.
                </p>
              </div>
            </div>
            <div className="row" style={{ height: "4rem" }} />

            {/* Hero */}
            <div className="row">
              <div className="col-6">
                <img
                  src={hero}
                  className="d-block border-radius w-100"
                  alt="Laptop 2"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-12 col-xl-6 mb-4 d-flex align-items-stretch ">
                    <div class="card backgroundC w-100">
                      <div class="card-body">
                        <img
                          src={profile}
                          className="d-block border-radius mb-2 p-0"
                          alt="Laptop 2"
                          style={{
                            height: "4rem",
                            objectFit: "center",
                            borderRadius: "15px",
                          }}
                        />
                        <h1 class="txt fw-semibold ">17+</h1>
                        <h4 class="fs-4 fw-semibold py-3 text-secondary">
                          Clients
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mb-4 d-flex align-items-stretch ">
                    <div class="card backgroundC w-100">
                      <div class="card-body">
                        <img
                          src={tick}
                          className="d-block border-radius mb-2 p-0"
                          alt="Laptop 2"
                          style={{
                            height: "4rem",
                            objectFit: "center",
                            borderRadius: "15px",
                          }}
                        />
                        <h1 class="txt fw-semibold ">40+</h1>
                        <h4 class="fs-4 fw-semibold py-3 text-secondary">
                          Projects completed
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mb-4 d-flex align-items-stretch  mt-4 pt-4">
                    <div class="card backgroundC w-100">
                      <div class="card-body">
                        <img
                          src={profile}
                          className="d-block border-radius mb-2 p-0"
                          alt="Laptop 2"
                          style={{
                            height: "4rem",
                            objectFit: "center",
                            borderRadius: "15px",
                          }}
                        />
                        <h1 class="txt fw-semibold ">20+</h1>
                        <h4 class="fs-4 fw-semibold py-3 text-secondary">
                          Team
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mb-4 d-flex align-items-stretch  mt-4 pt-4">
                    <div class="card backgroundC w-100">
                      <div class="card-body">
                        <img
                          src={per}
                          className="d-block border-radius mb-2 p-0"
                          alt="Laptop 2"
                          style={{
                            height: "4rem",
                            objectFit: "center",
                            borderRadius: "15px",
                          }}
                        />
                        <h1 class="txt fw-semibold ">98.9%</h1>
                        <h4 class="fs-4 fw-semibold py-3 text-secondary">
                          Client rating
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ height: "20rem" }} />
          {/* Team */}
          <div className="row w-100 mx-0 px-0">
            <h1 className="text-center mb-3">Our team</h1>
            <h5 className="text-center mb-4 text-secondary">
              Watch our team in action and the peep who gets what done
            </h5>
            <div className="row" style={{ height: "4rem" }} />
            <div className="row mx-0 px-0">
              <div className="col-xl-3 px-0  order-1 order-xl-1 d-flex align-items-stretch col-lg-6 col-12 mb-4 ">
                <div class="card border-0 w-100 border-radius">
                  <div class="card-body p-0">
                    <img
                      src={kemi}
                      className="d-block border-radius mb-2 p-2 w-100 h-sm-100"
                      alt="Laptop 2"
                      style={{
                        height: "18rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <h4 class="card-text ps-2 fw-semibold tip my-2">
                      AG, Managing Director
                    </h4>
                    <h4 class="card-text ps-2 fw-semibold">Oyekemi Oyediran</h4>
                  </div>
                </div>
              </div>{" "}
              <div className="col-xl-3 px-0 d-flex order-4 order-xl-2 align-items-stretch col-lg-6 col-12 mb-4 ">
                <div class="card border-0 w-100 border-radius">
                  <div class="card-body p-0">
                    <img
                      src={Ejiro}
                      className="d-block border-radius mb-2 p-2 w-100 h-sm-100"
                      alt="Laptop 2"
                      style={{
                        height: "18rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <h4 class="card-text ps-2 fw-semibold tip my-2">
                      Head, Project Management{" "}
                    </h4>
                    <h4 class="card-text ps-2 fw-semibold">Mejero Campbell </h4>
                  </div>
                </div>
              </div>{" "}
              <div className="col-xl-3 px-0 order-2 order-xl-3 d-flex align-items-stretch col-lg-6 col-12 mb-4 ">
                <div class="card border-0 w-100 border-radius">
                  <div class="card-body p-0">
                    <img
                      src={leke}
                      className="d-block border-radius mb-2 p-2 w-100 h-sm-100"
                      alt="Laptop 2"
                      style={{
                        height: "18rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <h4 class="card-text ps-2 fw-semibold tip my-2">
                      Head, Apps Development{" "}
                    </h4>
                    <h4 class="card-text ps-2 fw-semibold"> Oluleke Okewale</h4>
                  </div>
                </div>
              </div>{" "}
              <div className="col-xl-3 px-0 order-3 order-xl-4 d-flex align-items-stretch col-lg-6 col-12 mb-4 ">
                <div class="card border-0 w-100 border-radius">
                  <div class="card-body p-0">
                    <img
                      src={kazim}
                      className="d-block border-radius mb-2 p-2 w-100 h-sm-100"
                      alt="Laptop 2"
                      style={{
                        height: "18rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <h4 class="card-text ps-2 fw-semibold tip my-2 text-truncate">
                      Head, Apps Security & Releated Services{" "}
                    </h4>
                    <h4 class="card-text ps-2 fw-semibold">Quazim Badmus</h4>
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className="row mx-0 px-0">
              <div className="col-xl-3 px-0  d-flex align-items-stretch col-lg-6 col-12 mb-4 ">
                <div class="card border-0 w-100 border-radius">
                  <div class="card-body p-0">
                    <img
                      src={titi}
                      className="d-block border-radius mb-2 p-2 w-100 h-sm-100"
                      alt="Laptop 2"
                      style={{
                        height: "18rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <h4 class="card-text ps-2 fw-semibold tip my-2">
                      Head, Business Analysis{" "}
                    </h4>
                    <h4 class="card-text ps-2 fw-semibold">Tilayo Olatunji</h4>
                  </div>
                </div>
              </div>{" "}
              <div className="col-xl-3 px-0  d-flex order-6 order-xl-6 align-items-stretch col-lg-6 col-12 mb-4 ">
                <div class="card border-0 w-100 border-radius">
                  <div class="card-body p-0">
                    <img
                      src={Joe}
                      className="d-block border-radius mb-2 p-2 w-100 h-sm-100"
                      alt="Laptop 2"
                      style={{
                        height: "18rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <h4 class="card-text ps-2 fw-semibold tip my-2">
                      Head, Quality Assurance{" "}
                    </h4>
                    <h4 class="card-text ps-2 fw-semibold">
                      Joseph Olujemisin
                    </h4>
                  </div>
                </div>
              </div>{" "}
              <div className="col-xl-3 px-0 d-flex order-7 order-xl-7  align-items-stretch col-lg-6 col-12 mb-4 ">
                <div class="card border-0 w-100 border-radius">
                  <div class="card-body p-0">
                    <img
                      src={obinna}
                      className="d-block border-radius mb-2 p-2 w-100 h-sm-100"
                      alt="Laptop 2"
                      style={{
                        height: "18rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <h4 class="card-text ps-2 fw-semibold tip my-2">
                      Head, Solutions Delivery{" "}
                    </h4>
                    <h4 class="card-text ps-2 fw-semibold">Obinna Njoku</h4>
                  </div>
                </div>
              </div>{" "}
              <div className="col-xl-3 px-0   order-8  order-xl-8  align-items-stretch col-lg-6 col-12 mb-4 ">
                <div class="card border-0 w-100 border-radius">
                  <div class="card-body p-0">
                    <img
                      src={gbo}
                      className="d-block border-radius mb-2 p-2 w-100 h-sm-100"
                      alt="Laptop 2"
                      style={{
                        height: "18rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <h4 class="card-text ps-2 fw-semibold tip my-2">
                      Head, Tech Operations{" "}
                    </h4>
                    <h4 class="card-text ps-2 fw-semibold">
                      Adegboyega Adewusi
                    </h4>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="row" style={{ height: "10rem" }} />
          <div className="w-100">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
