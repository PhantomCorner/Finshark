import React from "react";
import "./card.css";
import { CompanySearch } from "@/company";
import AddPortfolio from "../portfolio/addPortfolio/addPortfolio";
import { SyntheticEvent } from "react";
interface Props {
  id: string;
  searchRes: CompanySearch;
  handleSubmit: (e: SyntheticEvent) => void;
}

const card = ({ id, searchRes, handleSubmit }: Props) => {
  return (
    <div className="card">
      <div className="id">{id}</div>
      <img
        src="https://images.unsplash.com/photo-1730305948991-326bb54514c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        alt="image"
      />
      <div className="details">
        <h2>{searchRes.name}</h2>
        <p>{searchRes.symbol}</p>
      </div>
      <p className="infor">
        {searchRes.exchangeShortName}-{searchRes.exchangeShortName}
      </p>
      <AddPortfolio handleSubmit={handleSubmit} symbol={searchRes.symbol} />
    </div>
  );
};
export default card;
