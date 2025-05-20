import React, {
  type ChangeEvent,
  type FormEvent,
  type SyntheticEvent,
} from "react";
type Props = {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({
  handleSearchChange,
  onSearchSubmit,
  search,
}) => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={(e) => handleSearchChange(e)}></input>

        <button type="submit">Search</button>
      </form>
    </>
  );
};
export default Search;
