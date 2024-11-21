"use client";
// import Card from "./components/card/card";
import { searchCompanies } from "@/api";
import CardList from "./components/cardList/cardList";
import Search from "./components/search/search";
import { ChangeEvent, SyntheticEvent, useState } from "react";
export default function Home() {
  const [search, setSearch] = useState<string>("");
  const onhandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };
  const onClick = (e: SyntheticEvent) => {
    console.log(search);
  };
  // const data =  searchCompanies("tsla");
  // console.log(data);
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
