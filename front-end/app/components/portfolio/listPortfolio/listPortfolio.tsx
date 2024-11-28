import React, { SyntheticEvent } from "react";
import CardPortfolio from "../cardPortfolio/cardPortfolio";
interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const listPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <>
      <h3> My Portfolio </h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((value, index) => (
            <CardPortfolio
              portfolioValue={value}
              key={index}
              onPortfolioDelete={onPortfolioDelete}
            />
          ))}
      </ul>
    </>
  );
};
export default listPortfolio;
