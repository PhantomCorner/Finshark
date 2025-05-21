import React from "react";
import { TestDataCompany } from "../Table/testData";
type Props = {
  config: any;
  data: any;
};

function RatioList({ config, data }: Props) {
  const renderedRow = config.map((row: any) => {
    return (
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">{row.label}</p>
            <p className="text-sm font-medium">
              {row.subTitle && row.subTitle}
            </p>
          </div>
          <div className="inline-flx items-center text-base">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4">
      <ul className="divided-y divided-gray-200">{renderedRow}</ul>
    </div>
  );
}

export default RatioList;
