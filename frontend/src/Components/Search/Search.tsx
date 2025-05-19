import React, {
  type ChangeEvent,
  type FormEvent,
  type SyntheticEvent,
} from "react";
type Props = {
  onClick: (e: SyntheticEvent) => void;
  search: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({ handleChange, onClick, search }) => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => onClick(e)}>Print</button>
    </div>
  );
};
export default Search;
