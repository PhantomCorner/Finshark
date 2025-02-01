"use client";
import { getCompanyProfile } from "@/api";
import { CompanyProfile } from "@/company";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SideBar from "../../components/sideBar/sideBar";
import CompanyDashboard from "../../components/companyDashboard/companyDashboard";
import Tile from "../../components/tile/tile";
interface Props {}
export default function companyPage(props: Props) {
  const params = useParams<{ companyName: string }>();
  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getProfileInit = async () => {
      try {
        const res = await getCompanyProfile(params.companyName as string);
        console.log(res);
        if (res) {
          setCompany(res[0]);
        } else {
          setCompany(undefined);
        }
      } catch (error) {
        console.error("Error fetching company profile:", error);
        setCompany(undefined);
      }
    };
    getProfileInit();
  }, [params.companyName]);
  return (
    <div>
      {company ? (
        <div>{company.companyName}</div>
      ) : (
        <div>Company Not Found</div>
      )}
      <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
        <CompanyDashboard ticker={params.companyName}>
          <Tile title="Company Name" subTitle={params.companyName} />
        </CompanyDashboard>
        <SideBar />
      </div>
    </div>
  );
}
