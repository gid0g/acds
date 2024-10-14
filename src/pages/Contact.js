import React, { useContext } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { ThemeContext } from "../context/theme.js";

function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header current="contacts" />
      <div className="Container2">
        <div className="container-fluid px-3">
          <div className="d-flex justify-content-center mt-1 mb-4">
            <button
              type="button"
              disabled
              className="btn btn-outline-secondary btn-lg border-radius"
            >
              Contact{" "}
            </button>
          </div>
          <div className="row" style={{ height: "2rem" }} />

          <div className="mt-4">
            <h1 className="text-center text-dark">Reach out to us. </h1>{" "}
            <p className="text-center text-secondary">
              With a proven track record of excellence, we are dedicated to
              guiding our clients through every step of their technological
              journey.
            </p>
          </div>
          <div className="row" style={{ height: "5rem" }} />
          <Footer show={true} />
        </div>
      </div>
    </>
  );
}

export default Contact;
