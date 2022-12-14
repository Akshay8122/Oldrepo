import { useState } from "react";
import usePrevious from "../hooks/usePrevious";
// Usage
export default function App() {
  // State value and setter for our example
  const [count, setCount] = useState(0);
  // Get the previous value (was passed into hook on last render)
  const prevCount = usePrevious(count);
  // Display both current and previous count value
  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
