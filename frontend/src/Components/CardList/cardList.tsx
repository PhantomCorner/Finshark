import React, { type JSX, type SyntheticEvent } from "react";
import "./index.css";
import Card from "../Card/Card";
import type { CompanySearch } from "../../../api/company";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../Spinner/Spinner";
type Props = {
  searchRes: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
};

const CardList: React.FC<Props> = ({
  searchRes,
  onPortfolioCreate,
}): JSX.Element => {
  return (
    <>
      {searchRes.length > 0 ? (
        searchRes.map((item) => {
          return (
            <Card
              id={item.symbol}
              searchRes={item}
              key={uuidv4()}
              onPortfolioCreate={onPortfolioCreate}
            />
          );
        })
      ) : (
        <>
          <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
            No results!
          </p>
        </>
      )}
    </>
  );
};
export default CardList;
