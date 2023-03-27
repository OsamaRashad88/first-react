import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="py-5">
      <h2 className="fs-1 text-center contitle">Contact US</h2>
      <div className="container py-5">
        <div className="w-75 mx-auto">
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Name"
          ></input>
          <input
            className="form-control"
            id="email"
            type="email"
            placeholder="email"
          ></input>
          <input
            className="form-control"
            id="phone-number"
            type="tel"
            placeholder="please enter your number"
          ></input>
          <textarea
            class="form-control"
            id="message"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
