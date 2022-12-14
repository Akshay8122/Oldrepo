import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Parent from "./Parent";
// import UserCounter from "./UserCounter";
import Custom from "./Custom";

ReactDOM.render(
  <React.StrictMode>
    {/* <App />, */}
    <Parent />,
    {/* <UserCounter /> */}
    <Custom />
  </React.StrictMode>,
  document.getElementById("root")
);
