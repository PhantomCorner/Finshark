import React from "react";
import Card from "../card/card";
import { CompanySearch } from "@/company";
import { useState, useEffect } from "react";
// receive data for each card
interface Props {
  searchRes: CompanySearch[];
}

const CardList = (props: Props) => {
  const [processedData, setProcessedData] = useState(props.searchRes);

  useEffect(() => {
    // 在这里处理数据
    setProcessedData(props.searchRes);
  }, [props.searchRes]);

  return (
    <div>
      {processedData.map((item, index) => (
        <Card key={index.toString()} id={index.toString()} searchRes={item} />
      ))}
    </div>
  );
};
export default CardList;
