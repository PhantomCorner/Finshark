import { useState } from "react";
import Card from "./Components/Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Card />
    </div>
  );
}

export default App;
