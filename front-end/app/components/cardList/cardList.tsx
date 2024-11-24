import React, { SyntheticEvent } from "react";
import Card from "../card/card";
import { CompanySearch } from "@/company";
import { useState, useEffect } from "react";
// receive data for each card
interface Props {
  searchRes: CompanySearch[];
  handleSubmit: (e: SyntheticEvent) => void;
}

const CardList = ({ searchRes, handleSubmit }: Props) => {
  const [processedData, setProcessedData] = useState(searchRes);

  useEffect(() => {
    // 在这里处理数据
    setProcessedData(searchRes);
  }, [searchRes]);

  return (
    <div>
      {processedData.map((item, index) => (
        <Card
          key={index.toString()}
          id={index.toString()}
          searchRes={item}
          handleSubmit={handleSubmit}
        />
      ))}
    </div>
  );
};
export default CardList;
