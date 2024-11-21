"use client";
import React, { ChangeEvent, SyntheticEvent } from "react";
interface Props {
  onClick: (e: SyntheticEvent) => void;
  query: string | undefined;
  onhandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const search = ({ onClick, query, onhandleChange }: Props) => {
  return (
    <div className="search">
      <input value={query} onChange={(e) => onhandleChange(e)} />
      <button onClick={(e) => onClick(e)}>Search</button>
    </div>
  );
};
export default search;
