import React, {type SyntheticEvent} from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import {Link} from "react-router";
import type {PortfolioGet} from "../../../Models/Portfolio";

type Props = {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
};

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    <>
      <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
        <Link
          to={`/company/${portfolioValue.symbol}/company-profile`}
          className="pt-6 text-xl font-bold">
          {portfolioValue.symbol}
        </Link>
        <DeletePortfolio
          portfolioValue={portfolioValue.symbol}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>
    </>
  );
};

export default CardPortfolio;
