
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      <h1>Clicked {count} times</h1>
    </button>
  );
};

export default App