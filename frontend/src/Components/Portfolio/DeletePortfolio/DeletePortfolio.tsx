import React, { type SyntheticEvent } from "react";

type Props = {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
};

export default function DeletePortfolio({
  onPortfolioDelete,
  portfolioValue,
}: Props) {
  return (
    <form onSubmit={onPortfolioDelete}>
      <input readOnly hidden={true} value={portfolioValue} />
      <button type="submit">Remove</button>
    </form>
  );
}
