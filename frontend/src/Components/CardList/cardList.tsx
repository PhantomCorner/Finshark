import React, { type JSX } from "react";
import "./index.css";
import Card from "../Card/Card";
import type { CompanySearch } from "../../../api/company";
import { v4 as uuidv4 } from "uuid";
type Props = {
  searchRes: CompanySearch[];
};

const CardList: React.FC<Props> = ({ searchRes }): JSX.Element => {
  return (
    <>
      {searchRes.length > 0 ? (
        searchRes.map((item) => {
          return <Card id={item.symbol} searchRes={item} key={uuidv4()} />;
        })
      ) : (
        <h1>No result</h1>
      )}
    </>
  );
};
export default CardList;
