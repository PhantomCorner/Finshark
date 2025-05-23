import axios from "axios";
import {
  type CompanyBalanceSheet,
  type CompanyIncomeStatement,
  type CompanyKeyMetrics,
  type CompanyProfile,
  type CompanySearch,
} from "./company";
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
export const getKeyMetrics = async function (query: string) {
  try {
    const res = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?&apikey=${VITE_API_KEY}`
    );
    return res;
  } catch (e: any) {
    console.log("error message from API", e);
  }
};

export const getIncomeStatement = async function (query: string) {
  try {
    const res = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&?&apikey=${VITE_API_KEY}`
    );
    return res;
  } catch (e: any) {
    console.log("error message from API", e);
  }
};

export const getBalanceSheet = async function (query: string) {
  try {
    const res = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&?&apikey=${VITE_API_KEY}`
    );
    return res;
  } catch (e: any) {
    console.log("error message from API", e);
  }
};
