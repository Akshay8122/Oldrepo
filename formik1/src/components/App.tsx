import React from "react";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignupPage />}></Route>
          <Route path="/Signup" element={<SignupPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
