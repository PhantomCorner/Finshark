import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import CardList from "./Components/CardList/cardList";
import Search from "./Components/Search/Search";
import { searchCompanies } from "../api/api";

function App() {
  const [search, setSearch] = useState<string>("");
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  };
  const handleClick = async function (e: SyntheticEvent) {
    const res = await searchCompanies(search);
    console.log(res);
  };
  return (
    <div className="app">
      <Search
        onClick={handleClick}
        search={search}
        handleChange={handleChange}
      />
      <CardList />
    </div>
  );
}

export default App;
