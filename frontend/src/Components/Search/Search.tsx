import React, { useState, type ChangeEvent, type SyntheticEvent } from "react";

type Props = {};

const Search: React.FC<Props> = () => {
  const [search, setSearch] = useState<string>("");
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  };
  const handleClick = function (e: SyntheticEvent) {
    console.log(search, e);
  };
  return (
    <div>
      <input value={search} onChange={handleChange}></input>
      <button onClick={handleClick}>Print</button>
    </div>
  );
};
export default Search;
