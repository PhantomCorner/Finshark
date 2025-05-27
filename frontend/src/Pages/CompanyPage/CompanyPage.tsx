import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { CompanyProfile } from "../../../api/company";
import { getCompanyProfile } from "../../../api/api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";
import TenKFinder from "../../Components/TenKFinder/TenKfinder";

type Props = {};

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getProfileInit = async function () {
      const res = await getCompanyProfile(ticker!);
      setCompany(res?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={company.price.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile title="DCF" subTitle={company.dcf.toString()} />
            <TenKFinder ticker={company.symbol} />
            <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4">
              <strong>Description: </strong>
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
