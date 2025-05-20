import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import CardList from "./Components/CardList/cardList";
import Search from "./Components/Search/Search";
import { searchCompanies } from "../api/api";
import type { CompanySearch } from "../api/company";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchRes, setSearchRes] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const handleSearchChange = function (e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  };
  const onSearchSubmit = async function (e: SyntheticEvent) {
    e.preventDefault();
    const res = await searchCompanies(search);
    // check res content
    // if res is string, return as error message
    if (typeof res === "string") {
      setServerError(res);
      console.log(serverError);
    } else if (Array.isArray(res)) {
      setSearchRes(res);
      console.log(searchRes);
    }
  };
  const onPortfolioCreate = function (e: SyntheticEvent) {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="app">
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchRes={searchRes} onPortfolioCreate={onPortfolioCreate} />
    </div>
  );
}

export default App;
