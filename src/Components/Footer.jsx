import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/all.min.css";
let style = { backgroundColor: "RGB(44, 62, 80)", color: "white" };

export default function Footer() {
  return (
    <footer style={style}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 px-3">
            <h2>Location</h2>
            <p>2215 John Daniel Drive Clark, MO 65243 </p>
          </div>
          <div className="col-md-4">
            <h2>Around the Web</h2>
            <ul className="d-flex justify-content-between w-50 align-items-center">
              <i className="fa-brands fa-facebook fa-lg  "></i>
              <i className="fa-brands fa-twitter fa-lg"></i>
              <i className="fa-brands fa-linkedin fa-lg"></i>
              <i className="fa-brands fa-instagram fa-lg"></i>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>About Freelancer</h2>
            <p>
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by Route
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
