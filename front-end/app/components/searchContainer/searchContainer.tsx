"use client";
import { searchCompanies } from "@/api";
import CardList from "../cardList/cardList";
import Search from "../search/search";
import ListPortfolio from "../portfolio/listPortfolio/listPortfolio";
import { ChangeEvent, SyntheticEvent, useState, useEffect } from "react";
import { CompanySearch } from "@/company";
export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchRes, setSearchRes] = useState<CompanySearch[]>([]);
  const [serverErr, setServerErr] = useState<string>("");
  // handle search bar change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // handle search bar submit
  const submitSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await searchCompanies(search);
    if (typeof res === "string") {
      setServerErr(res);
      console.log(serverErr);
    } else if (Array.isArray(res)) {
      setSearchRes(res);
    }
  };
  // add a card to portfolio
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const exist = portfolioValues.find((value) => value === e.target[0].value);
    if (exist) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };
  useEffect(() => {
    console.log("Updated res:", searchRes);
  }, [searchRes]);

  return (
    <div>
      {serverErr && <div>{serverErr}</div>}
      <Search
        query={search}
        handleSearchChange={handleSearchChange}
        onSearchSubmit={submitSearch}
      />
      <ListPortfolio portfolioValues={portfolioValues} />
      <CardList searchRes={searchRes} handleSubmit={onPortfolioCreate} />
    </div>
  );
}
