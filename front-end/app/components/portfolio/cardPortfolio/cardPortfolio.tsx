import React from "react";

interface Props {
  portfolioValue: string;
}

const cardPortfolio = ({ portfolioValue }: Props) => {
  return (
    <>
      <h4>{portfolioValue}</h4>
      <button>Delete</button>
    </>
  );
};
export default cardPortfolio;
