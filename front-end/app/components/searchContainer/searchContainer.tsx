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
    const res = await searchCompanies(search);
    if (typeof res === "string") {
      setServerErr(res);
      console.log(serverErr);
    } else if (Array.isArray(res)) {
      setSearchRes(res);
    }
  };

  useEffect(() => {
    console.log("更新后的searchRes:", searchRes);
  }, [searchRes]);

  return (
    <div>
      <Search
        query={search}
        onhandleChange={onhandleChange}
        onClick={onClick}
      />
      <CardList />
    </div>
  );
}