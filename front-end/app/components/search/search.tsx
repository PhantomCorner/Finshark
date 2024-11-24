"use client";
import React, { ChangeEvent, SyntheticEvent } from "react";
interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  query: string | undefined;
}

const search = ({ onSearchSubmit, query, handleSearchChange }: Props) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <input value={query} onChange={handleSearchChange} />
    </form>
    // <div className="search">
    //   <input value={query} onChange={(e) => onhandleChange(e)} />
    //   <button onClick={(e) => onClick(e)}>Search</button>
    // </div>
  );
};
export default search;
