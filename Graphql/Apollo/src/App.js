import { Route } from "react-router-dom";
import "./App.css";
import CharactersList from "./pages/CharachtersList";
import Character from "./pages/Character";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Search from "./pages/Search";

function App() {  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route strict exact path="/" element={<CharactersList />} />
          <Route strict exact path="/search" element={<Search/>} />
          <Route strict exact path="/:id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

