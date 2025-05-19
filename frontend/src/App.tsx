import { useState } from "react";
import Card from "./Components/Card/Card";
import CardList from "./Components/CardList/cardList";
import Search from "./Components/Search/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Search />
      <CardList />
    </div>
  );
}

export default App;
