export type PortfolioGet = {
  id: number;
  companyName: string;
  purchase: number;
  lastDiv: number;
  industry: string;
  marketCap: number;
  comments: any;
  symbol: string;
};
export type PortfolioPost = {
  symbol: string;
};
