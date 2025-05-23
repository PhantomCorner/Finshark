import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { testIncomeStatementData } from "../../Components/Table/testData";

type Props = {};
const data = testIncomeStatementData;
type Company = (typeof data)[0];
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];
const DesignPage = (props: Props) => {
  return (
    <>
      <h1> Finshark design page</h1>
      <h2>
        This is Finshark's design page. This is where we design aspects of the
        app
      </h2>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table data={testIncomeStatementData} configs={tableConfig} />
    </>
  );
};

export default DesignPage;
