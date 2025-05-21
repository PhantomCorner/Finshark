import axios from "axios";
import { type CompanyProfile, type CompanySearch } from "./company";
type SearchRes = {
  data: CompanySearch[];
};
// fix env not in meta
// vite-env.d.ts needs to be in the root dir
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
export const searchCompanies = async function (companyName: string) {
  try {
    const res = await axios.get<SearchRes>(
      `https://financialmodelingprep.com/api/v3/search?query=${companyName}&apikey=${VITE_API_KEY}`
    );
    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return e.message;
    } else {
      return "unexpected error";
    }
  }
};

export const getCompanyProfile = async function (query: string) {
  try {
    const res = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?&apikey=${VITE_API_KEY}`
    );
    return res;
  } catch (e: any) {
    console.log("error message from API", e);
  }
};
