import React, { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { searchCompanies } from "../../../api/api";
type Props = {};

const Search: React.FC<Props> = () => {
  const [search, setSearch] = useState<string>("");
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  };
  const handleClick = function (e: SyntheticEvent) {
    const res = searchCompanies(search);
    console.log(res);
  };
  return (
    <div>
      <input value={search} onChange={handleChange}></input>
      <button onClick={handleClick}>Print</button>
    </div>
  );
};
export default Search;
