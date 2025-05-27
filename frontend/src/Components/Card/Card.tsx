import type React from "react";
import "./Card.css";
import type { CompanySearch } from "../../../api/company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import type { SyntheticEvent } from "react";
import { Link } from "react-router";
type Props = {
  id: string;
  searchRes: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
};

// Card: React.FC<Props>
// 这是给变量 Card 添加类型注解，说明：
// 	•	Card 是一个函数组件（Function Component）
// 	•	接收的参数类型是 Props
// 	•	并且可以自动识别 children（即你在 JSX 中放在 <Card>...</Card> 的内容）
//这个函数不仅接收一个 Props 类型的参数，而且它的返回值 必须是 一个 合法的 JSX 元素（JSX.Element）
// 所以不用再声明JSX.Element

const Card: React.FC<Props> = ({ id, searchRes, onPortfolioCreate }) => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link
        to={`/company/${searchRes.symbol}/company-profile`}
        className="font-bold text-center text-veryDarkViolet md:text-left"
      >
        {searchRes.name} ({searchRes.symbol})
      </Link>
      <p className="text-veryDarkBlue">{searchRes.currency}</p>
      <p className="font-bold text-veryDarkBlue">
        {searchRes.exchangeShortName} - {searchRes.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchRes.symbol}
      />
    </div>
  );
};
export default Card;
