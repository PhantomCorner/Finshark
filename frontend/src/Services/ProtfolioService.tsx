import axios from "axios";
import {handleError} from "../Helper/ErrorHandler";
import type {PortfolioPost, PortfolioGet} from "../Models/Portfolio";

const API_URL = "http://localhost:5254/api/portfolio";

export const portfolioGetAPI = async function () {
  try {
    const data = await axios.get<PortfolioGet[]>(`${API_URL}`);
    return data;
  } catch (e) {
    handleError(e);
  }
};

export const portfolioAddAPI = async function (symbol: string) {
  try {
    const data = await axios.post<PortfolioPost>(
      `${API_URL}/?symbol=${symbol}`
    );
    return data;
  } catch (e) {
    handleError(e);
  }
};
export const portfolioDeleteAPI = async function (symbol: string) {
  try {
    const data = await axios.delete<PortfolioPost>(
      `${API_URL}/?symbol=${symbol}`
    );
    return data;
  } catch (e) {
    handleError(e);
  }
};
