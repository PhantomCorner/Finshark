import React from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

type Props = {
  portfolioValues: string[];
};

const ListPortfolio = ({ portfolioValues }: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((item) => {
            return <CardPortfolio portfolioValue={item} />;
          })}
      </ul>
    </>
  );
};
export default ListPortfolio;
