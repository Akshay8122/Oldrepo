import React, { useState, useEffect } from "react";

function Child() {
  console.log("Child  rendered");
  useEffect(() => {
    console.log("Child Updated");

    return () => {
      console.log("Child cleanup called");
    };
  });

  const Childcomponent = <h1> I am Child </h1>;
  console.log("Child rendering completed");
  return Childcomponent;
}

function App() {
  console.log("App rendering started");
  const [count, setCount] = useState(() => {
    console.log("Lazy init 1 Started");
    return 0;
  });

  const [show, setShow] = useState(() => {
    console.log("Lazy count 2 Started");
    return false;
  });

  useEffect(() => {
    console.log("Counter updated | value = ", count);

    if (count === 5) {
      setShow(false);
    }

    return () => {
      console.log("Cleaning up for counter | value = ", count);
    };
  }, [count]);

  const AppComponent = (
    <div className="App">
      <h1 onClick={() => setCount((count) => count + 1)}> Counter1:{count} </h1>
      <br />
      {show && <Child />}
      {/* React.createElement(Child) ... => Child() */}
    </div>
  );

  console.log("App render ended");

  return AppComponent;
}

export default App;
