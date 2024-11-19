"use client";
import React, { useState } from "react";
type Props = {};

const search = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const onclick = (e: any) => {
    setSearch(e);
    console.log(e);
  };
  return (
    <div className="search">
      <input value={search} onChange={(e) => onclick(e.target.value)} />
    </div>
  );
};
export default search;
