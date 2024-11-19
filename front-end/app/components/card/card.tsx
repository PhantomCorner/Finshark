import React from "react";
import "./card.css";
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1730305948991-326bb54514c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        alt="image"
      />
      <div className="details">
        <h2>{companyName}</h2>
        <p>{ticker}</p>
      </div>
      <p className="infor">${price}</p>
    </div>
  );
};
export default card;
