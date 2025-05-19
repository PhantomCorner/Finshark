import React from "react";
import "./Card.css";
type Props = {};

const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit totam
        eius nemo, facilis aperiam consequuntur enim eveniet cumque illo optio
        aspernatur nulla, ea minima consequatur accusantium sit maiores, quos
        adipisci?
      </p>
    </div>
  );
};
export default Card;
