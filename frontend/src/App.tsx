import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import CardList from "./Components/CardList/cardList";
import Search from "./Components/Search/Search";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { searchCompanies } from "../api/api";
import type { CompanySearch } from "../api/company";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";
import "./index.css";
function App() {
  const [search, setSearch] = useState<string>("");
  const [searchRes, setSearchRes] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const handleSearchChange = function (e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  };
  const onSearchSubmit = async function (e: SyntheticEvent) {
    e.preventDefault();
    const res = await searchCompanies(search);
    // check res content
    // if res is string type, return as error message
    if (typeof res === "string") {
      setServerError(res);
      console.log(serverError);
    } else if (Array.isArray(res)) {
      setSearchRes(res);
      console.log(searchRes);
    }
  };
  const onPortfolioCreate = function (e: any) {
    e.preventDefault();
    const exist = portfolioValues.find((value) => {
      return value === e.target[0].value;
    });
    if (exist) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = function (e: any) {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };
  return (
    <>
      <Navbar />
      <Hero />
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList searchRes={searchRes} onPortfolioCreate={onPortfolioCreate} />
    </>
  );
}

export default App;
