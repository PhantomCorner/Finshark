"use client";
import React, { ChangeEvent, useState, SyntheticEvent } from "react";
type Props = {};

const search = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const onhandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };
  const onClick = (e: SyntheticEvent) => {
    console.log(search);
  };
  return (
    <div className="search">
      <input value={search} onChange={(e) => onhandleChange(e)} />
      <button onClick={(e) => onClick(e)}>Search</button>
    </div>
  );
};
export default search;
