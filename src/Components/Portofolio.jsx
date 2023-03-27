import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./portofolio.css";
import img1 from "../images/cabin.png";
import img2 from "../images/cake.png";
import img3 from "../images/circus.png";
import img4 from "../images/game.png";
import img5 from "../images/safe.png";
import img6 from "../images/submarine.png";
import "./css/all.min.css";

export default function Portofolio() {
  let [src, setsrc] = useState(img1);
  let [name, setname] = useState("Cabin");

  function changesrc(newsrc) {
    let layer = document.querySelector(".layer");

    setsrc(newsrc.target.getAttribute("src"));
    setname(newsrc.target.getAttribute("name"));
    layer.classList.replace("d-none", "d-flex");
  }
  function close() {
    let layer = document.querySelector(".layer");
    layer.classList.replace("d-flex", "d-none");
  }

  return (
    <div id="portofolio" className="container  py-5 ">
      <h2 className="text-center mb-3 portTitle">Portofolio</h2>

      <div className="row gy-4">
        <div className="col-md-4 port-img position-relative">
          <img
            className="w-100"
            src={img1}
            name="Cabin"
            alt=""
            onClick={(e) => changesrc(e)}
          />
        </div>
        <div className="col-md-4 port-img position-relative">
          <img
            className="w-100"
            src={img2}
            name="cake"
            alt=""
            onClick={(e) => changesrc(e)}
          />
        </div>
        <div className="col-md-4  port-img  position-relative">
          <img
            className="w-100"
            src={img3}
            name="circus"
            alt=""
            onClick={(e) => changesrc(e)}
          />
        </div>
        <div className="col-md-4  port-img  position-relative">
          <img
            className="w-100"
            src={img4}
            name="game"
            alt=""
            onClick={(e) => changesrc(e)}
          />
        </div>
        <div className="col-md-4  port-img  position-relative">
          <img
            className="w-100"
            src={img5}
            name="safe"
            alt=""
            onClick={(e) => changesrc(e)}
          />
        </div>
        <div className="col-md-4  port-img  position-relative">
          <img
            className="w-100"
            src={img6}
            alt=""
            name="submarine"
            onClick={(e) => changesrc(e)}
          />
        </div>
      </div>
      <div className="layer position-fixed start-0 end-0 bottom-0 d-flex top-0 d-none justify-content-center align-items-center text-white">
        <div className="layer-child d-flex position-relative  justify-content-center align-items-center bg-white">
          <div className="text-center h-100">
            <h2 className="text-black">{name}</h2>
            <img className=" layer-image  " src={src} alt="" />
            <div className="bg-primary">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                voluptas temporibus delectus voluptate corporis!
              </p>
              <button
                className="btn btn-danger p-2 bg-dark"
                onClick={() => {
                  close();
                }}
              >
                Close image
              </button>
              <i
                className="fa-solid fa-xmark fa-lg  closemark"
                onClick={() => {
                  close();
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
