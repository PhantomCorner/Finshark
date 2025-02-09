import axios from "axios";
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error occurred";
    }
  }
};
export const getCompanyProfile = async (query: string) => {
  try {
    const response = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error occurred";
    }
  }
};
export const getKeyMetrics = async (query: string) => {
  try {
    const response = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error occurred";
    }
  }
};
