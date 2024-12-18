import React from "react";
import Table from "../components/table/table";
import RatioList from "../components/ratioList/ratioList";
type Props = {};

const designPage = (props: Props) => {
  return (
    <>
      <h1>This is the Design Page</h1>
      <h2> This is Finshark's design page.</h2>
      <RatioList />
      <Table />
    </>
  );
};
export default designPage;
