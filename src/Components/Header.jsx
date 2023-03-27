import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import cabin from "../images/avatar.svg";
let cabinstyle = { width: "300px", height: "300px" };

let startstyle = {
  position: "#relative",
  "::after": {
    color: "#ffffff",
    width: "30px",
    height: "30px",
    position: "absolute",
    top: "15px",
  },
};

export default function Header() {
  return (
    <div style={{ backgroundColor: "RGB(26, 188, 156)" }}>
      <div className="wrapper vh-100">
        <nav
          style={{ backgroundColor: "darkblue " }}
          className="navbar navbar-dark  navbar-expand-lg bg-body-tertiary  "
        >
          <div className="container py-4">
            <a className="navbar-brand" href="#">
              Start React
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="h-100 d-flex justify-content-center align-items-center">
          <div>
            <img
              className="rounded-circle"
              style={cabinstyle}
              src={cabin}
            ></img>
            <h1 className="text-white text-center " style={startstyle}>
              Start React
            </h1>
          </div>
        </header>
      </div>
    </div>
  );
}
