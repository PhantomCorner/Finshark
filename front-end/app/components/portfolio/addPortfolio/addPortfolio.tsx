import React, { SyntheticEvent } from "react";

type Props = {
  handleSubmit: (e: SyntheticEvent) => void;
  symbol: string;
};

const AddPortfolio = ({ handleSubmit, symbol }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <input readOnly hidden value={symbol} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPortfolio;
