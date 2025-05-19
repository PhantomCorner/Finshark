import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import CardList from "./Components/CardList/cardList";
import Search from "./Components/Search/Search";
import { searchCompanies } from "../api/api";
import type { CompanySearch } from "../api/company";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchRes, setSearchRes] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  };
  const handleClick = async function (e: SyntheticEvent) {
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
  return (
    <div className="app">
      <Search
        onClick={handleClick}
        search={search}
        handleChange={handleChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <CardList />
    </div>
  );
}

export default App;
