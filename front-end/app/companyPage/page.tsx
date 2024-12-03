"use client";
import { getCompanyProfile } from "@/api";
import { CompanyProfile } from "@/company";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {}
export default function companyPage(props: Props) {
  let { ticker } = useParams();
  console.log(ticker);
  const [company, setCompany] = useState<CompanyProfile>();
  //   useEffect(() => {
  //     const getProfileInit = async () => {
  //       const res = await getCompanyProfile(ticker as string);
  //       setCompany(res);
  //     };
  //     getProfileInit();
  //   }, []);
  return (
    <div>
      {ticker}
      {company ? (
        <div>{company.companyName}</div>
      ) : (
        <div>Company Not Found</div>
      )}
    </div>
  );
}
