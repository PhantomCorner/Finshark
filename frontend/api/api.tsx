import axios from "axios";
import { CompanySearch } from "./company";
type SearchRes = {
  data: CompanySearch[];
};
// fix env not in meta
// vite-env.d.ts needs to be in the root dir
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
export const searchCompanies = async function (params: string) {
  try {
    const res = await axios.get<SearchRes>(
      `https://financialmodelingprep.com/stable/search-symbol?query=AAPL&apikey=${VITE_API_KEY}`
    );
    return res;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.log(e);
    } else {
      console.log("unexpected error");
    }
  }
};
