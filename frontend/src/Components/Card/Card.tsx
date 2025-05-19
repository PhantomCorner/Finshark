import type React from "react";
import "./Card.css";
import type { JSX } from "react";
type Props = {
  companyName: string;
  price: number;
  info: string;
};

// Card: React.FC<Props>
// 这是给变量 Card 添加类型注解，说明：
// 	•	Card 是一个函数组件（Function Component）
// 	•	接收的参数类型是 Props
// 	•	并且可以自动识别 children（即你在 JSX 中放在 <Card>...</Card> 的内容）
//这个函数不仅接收一个 Props 类型的参数，而且它的返回值 必须是 一个 合法的 JSX 元素（JSX.Element）
// 所以不用再声明JSX.Element

const Card: React.FC<Props> = ({ companyName, price, info }) => {
  return (
    <div className="card">
      <div className="details">
        <h2>{companyName}</h2>
        <p>${price}</p>
      </div>
      <p className="info">{info}</p>
    </div>
  );
};
export default Card;
