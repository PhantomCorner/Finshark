import React, { useEffect, useState } from "react";
import type { CompanyCashFlow } from "../../../api/company";
import { useOutletContext } from "react-router";
import { getCashFlow } from "../../../api/api";
import Table from "../Table/Table";

type Props = {};
const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];
const CashFlow = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [cashFlow, setCashFlow] = useState<CompanyCashFlow[]>();
  useEffect(() => {
    const getCashFlowData = async function () {
      const res = await getCashFlow(ticker);
      setCashFlow(res!.data);
    };
    getCashFlowData();
  }, []);

  return (
    <>
      {cashFlow ? (
        <Table configs={config} data={cashFlow} />
      ) : (
        <h1> Company cash flow found </h1>
      )}
    </>
  );
};

export default CashFlow;
