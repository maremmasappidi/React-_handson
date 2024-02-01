// components/Card.js
import React from "react";
import { FaArrowCircleLeft, FaGoogle } from "react-icons/fa";

const Card = ({ title, description, icon, number, color }) => (
  <div
    className="card"
    style={{ width: "18rem", height: "2rem", margin: "5px" }}
  >
    <div className="card-body">
      <h5 className="" style={{ color: color, fontWeight }}></h5>
      {/* <FaGoogle className="float-start" style={{ fontSize: '1.8em' }} /> */}
      <h5 className="font-serif">
        {title}
        {icon}
      </h5>
      <p className="topright">{number}</p>

      <p className="card-text">{description}</p>
    </div>
    <div className="card-footer text-right"></div>
  </div>
);

export default Card;
