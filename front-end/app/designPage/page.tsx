import React from "react";
import Table from "../components/table/table";
import RatioList from "../components/ratioList/ratioList";
import { testIncomeStatementData } from "../components/table/testData";
type Props = {};
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const designPage = (props: Props) => {
  return (
    <>
      <h1>This is the Design Page</h1>
      <h2> This is Finshark's design page.</h2>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table />
    </>
  );
};
export default designPage;
