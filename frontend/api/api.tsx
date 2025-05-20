import axios from "axios";
import type { CompanySearch } from "./company";
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
