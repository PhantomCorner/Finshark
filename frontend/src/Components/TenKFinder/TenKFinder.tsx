import React, { useEffect, useState } from "react";
import type { CompanyTenK } from "../../../api/company";
import { getTenK } from "../../../api/api";
import TenKFinderItem from "./TenKFinderItem";
import Spinner from "../Spinner/Spinner";

type Props = {
  ticker: string;
};

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  useEffect(() => {
    const getTenKData = async function () {
      const res = await getTenK(ticker);
      setCompanyData(res?.data);
    };
    getTenKData();
  }, []);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData ? (
        companyData.splice(0, 5).map((item) => {
          return <TenKFinderItem tenK={item} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;
