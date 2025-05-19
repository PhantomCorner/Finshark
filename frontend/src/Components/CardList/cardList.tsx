import React, { type JSX } from "react";
import "./index.css";
import Card from "../Card/Card";
type Props = {};

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card price={998} info="testing" companyName="AAPL" />
      <Card price={998} info="testing" companyName="AAPL" />
      <Card price={998} info="testing" companyName="AAPL" />
      <Card price={998} info="testing" companyName="AAPL" />
    </div>
  );
};
export default CardList;
