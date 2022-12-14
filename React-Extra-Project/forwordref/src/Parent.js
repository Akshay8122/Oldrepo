import React, { useState, useEffect, useRef } from "react";

export default function Parent() {
  const [input, setInput] = useState("");
  //  const[count,setCount] = useState(1);
  const count = useRef(null);

  useEffect(() => {
    //  setCount((prevState) => prevState + 1);
    count.current += 1;
  });

  return (
    <div>
      <h1>Another demo</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>You have entered "{input}" </div>
      <div>Rerender {count.current}</div>
    </div>
  );
}
