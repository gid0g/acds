import React, { useContext } from "react";
import { ThemeContext } from "../context/theme.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const Header = (current) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const linkstyle = {
    textDecoration: "none",
    color: theme === "dark" ? "white" : "grey",
  };
  console.log("current", current);
  return (
    <div className="container-fluid">
      <div className="">
        <div
          className={`row text-center p-2 d-none d-xl-block ${
            theme === "dark" ? "dark" : "bg-secondary-subtle"
          }`}
        >
          <p>
            {" "}
            Any news or announcements <Link to=""> Learn more</Link>
          </p>
        </div>
        <div className="row px-xl-4 p-0">
          <nav className="navbar navbar-expand-xl">
            <div className="container-fluid m-1 p-0">
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
              <Link
                to="/"
                className="d-flex align-items-center ps-2"
                style={{
                  textDecoration: "none",
                  color: theme === "dark" ? "white" : "grey",
                }}
              >
                <img src={logo} height="10%" className="img-fluid pe-2 " />
                <h5 className="text-wrap mx-3 my-2 mt-xl-0 d-none d-xl-inline ">
                  {" "}
                  Alliance Consulting & Digital Solutions
                </h5>
              </Link>

              <div
                className="collapse navbar-collapse justify-content-center "
                id="navbarText"
              >
                <ul className="navbar-nav mb-2 mb-xl-0  me-xl-auto ms-xl-auto">
                  <li className="nav-item mx-3 my-2 mt-xl-0">
                    <h5 className="">
                      <Link
                        to="/about"
                        className={`${current.current == "about" && "current"}`}
                        style={linkstyle}
                      >
                        About
                      </Link>
                    </h5>
                  </li>
                  <li className="nav-item mx-3 my-2 mt-xl-0">
                    <h5 className="">
                      <Link
                        to="/services"
                        className={`${
                          current.current == "services" && "current"
                        }`}
                        style={linkstyle}
                      >
                        Services
                      </Link>
                    </h5>
                  </li>
                  <li className="nav-item mx-3 my-2 mt-xl-0">
                    <h5 className="">
                      <Link
                        to="/products"
                        className={`${
                          current.current == "products" && "current"
                        }`}
                        style={linkstyle}
                      >
                        Products
                      </Link>
                    </h5>
                  </li>
                  <li className="nav-item mx-3 my-2 mt-xl-0 text-truncate">
                    <h5 className="">
                      <Link
                        to="/"
                        className={`${current.current == "" && "current"}`}
                        style={linkstyle}
                      >
                        Clients & Partners
                      </Link>
                    </h5>
                  </li>
                  <li className="nav-item mx-3 my-2 mt-xl-0">
                    <h5 className="">
                      <Link
                        to="/contacts"
                        className={`${
                          current.current == "contacts" && "current"
                        }`}
                        style={linkstyle}
                      >
                        Contact
                      </Link>
                    </h5>
                  </li>
                </ul>
                <div className="d-flex flex-row my-1 ">
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
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="mt-4">
              <h2 className="ms-3">Contact us </h2>
              <div class="modal-body">
                <form className="p-2">
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
