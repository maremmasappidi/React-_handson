import React from "react";
const Card = ({
  title,
  description,
  number,
  icon,
  color,
  fontWeight,
  subtitle,
}) => (
  <div
    className="card"
    style={{ width: "20rem", height: "6rem", margin: "10px" }}
  >
    <div className="card-body">
      <h5 className="" style={{ color: color, fontWeight }}>
        {icon} {title}
        <p className="card-subtitle subtitle">{subtitle}</p>
      </h5>
      <p className="body">{description}</p>
      <p className="topright">{number}</p>
    </div>
  </div>
);

export default Card;
