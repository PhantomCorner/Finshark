import React from "react";
import Card from "../card/card";
// receive data for each card
interface Props {}

const cardList = (props: Props) => {
  const data = [
    {
      companyName: "Apple",
      ticker: "APPL",
      price: 120,
    },
    {
      companyName: "Apple_1",
      ticker: "APPL_1",
      price: 220,
    },
    {
      companyName: "Apple_2",
      ticker: "APPL_2",
      price: 320,
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <Card
          companyName={item.companyName}
          ticker={item.ticker}
          price={item.price}
          key={index}
        />
      ))}
    </div>
  );
};
export default cardList;
