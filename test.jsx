import React, { useContext } from "react";
import { ThemeContext } from "../context/theme.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = (current) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const linkstyle = {
    textDecoration: "none",
    color: theme === "dark" ? "white" : "grey",
  };

  return (
    <div>
      <div className="container-fluid">
        <div
          className={`row text-center p-2 ${
            theme === "dark" ? "dark" : "bg-secondary-subtle"
          }`}
        >
          <p>
            Any news or announcements <Link to=""> Learn more</Link>
          </p>
        </div>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <Link
                to="/"
                className="d-flex align-items-center"
                style={linkstyle}
              >
                <h4 className="m-0 d-flex align-items-center">
                  <img
                    src={logo}
                    className="img-fluid"
                    style={{ width: "40px", height: "40px" }}
                    alt="Logo"
                  />
                  <span className="ps-2 d-none d-md-inline">
                    Alliance Consulting & Digital Solutions
                  </span>
                </h4>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarText"
              >
                <ul className="navbar-nav mb-2 mb-lg-0 me-auto ms-auto">
                  <li className="nav-item mx-3">
                    <Link
                      to="/about"
                      className={`nav-link ${
                        current.current === "about" && "current"
                      }`}
                      style={linkstyle}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link
                      to="/services"
                      className={`nav-link ${
                        current.current === "services" && "current"
                      }`}
                      style={linkstyle}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link
                      to="/products"
                      className={`nav-link ${
                        current.current === "products" && "current"
                      }`}
                      style={linkstyle}
                    >
                      Products
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link
                      to="/client"
                      className={`nav-link ${
                        current.current === "" && "current"
                      }`}
                      style={linkstyle}
                    >
                      Clients & Partners
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link
                      to="/contacts"
                      className={`nav-link ${
                        current.current === "contacts" && "current"
                      }`}
                      style={linkstyle}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="d-flex flex-row my-1">
                  <button
                    type="button"
                    className="me-2 btn btn-lg talk badge rounded-pill text-dark fs-6"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Talk to us{" "}
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
                      className="text-primary fs-6"
                    />{" "}
                  </button>
                  <button
                    className={`btn btn-lg light-dark-mode-button ${
                      theme === "light" ? "dark-mode" : "light-mode"
                    }`}
                    onClick={toggleTheme}
                  >
                    {theme === "light" ? (
                      <FontAwesomeIcon icon={faSun} />
                    ) : (
                      <FontAwesomeIcon icon={faMoon} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="mt-4">
              <h2 className="ms-3">Contact us</h2>
              <div className="modal-body">
                <form className="p-2">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Full name
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
                    <label htmlFor="exampleInputEmail1" className="form-label">
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
                      <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary blue w-100"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

<div className="row d-flex flex-wrap py-4 flex-row">
  <div className="col-5 pt-4 ">...</div>
  <div className="col-2 pt-3">...</div>
  ...
</div>;