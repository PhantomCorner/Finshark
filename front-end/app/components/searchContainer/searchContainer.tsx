"use client";
import { searchCompanies } from "@/api";
import CardList from "../cardList/cardList";
import Search from "../search/search";
import { ChangeEvent, SyntheticEvent, useState, useEffect } from "react";
import { CompanySearch } from "@/company";
export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [searchRes, setSearchRes] = useState<CompanySearch[]>([]);
  const [serverErr, setServerErr] = useState<string>("");
  const onhandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };
  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await searchCompanies(search);
    if (typeof res === "string") {
      setServerErr(res);
      console.log(serverErr);
    } else if (Array.isArray(res)) {
      setSearchRes(res);
    }
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  };
  useEffect(() => {
    console.log("更新后的searchRes:", searchRes);
  }, [searchRes]);

  return (
    <div>
      {serverErr && <div>{serverErr}</div>}
      <Search
        query={search}
        handleSearchChange={onhandleChange}
        onSearchSubmit={onClick}
      />
      <CardList searchRes={searchRes} handleSubmit={handleSubmit} />
    </div>
  );
}
