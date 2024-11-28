import React from "react";
import CardPortfolio from "../cardPortfolio/cardPortfolio";
interface Props {
  portfolioValues: string[];
}

const listPortfolio = ({ portfolioValues }: Props) => {
  return (
    <>
      <h3> My Portfolio </h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((value, index) => (
            <CardPortfolio portfolioValue={value} key={index} />
          ))}
      </ul>
    </>
  );
};
export default listPortfolio;
