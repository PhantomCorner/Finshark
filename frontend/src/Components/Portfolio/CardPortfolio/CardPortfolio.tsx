import React from "react";

type Props = {
  portfolioValue: string;
};

const CardPortfolio = ({ portfolioValue }: Props) => {
  return (
    <>
      <h4>
        {portfolioValue}
        <button>X</button>
      </h4>
    </>
  );
};

export default CardPortfolio;
