import axios from "axios";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState([]);

  function onsubmit() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((res) => setUserData(res.data));
  }

  return (
    <div className="App">
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={onsubmit}>submit</button>

      {userData.map((data) => {
        return (
          <div key={data.id}>
            <div>
              <p>{data.name}</p>
              <p>{data.description}</p>
              <p>{data.stargazers_count}</p>
              <p>{data.language}</p>
            </div>
            {/* <a href={data.url}>url</a> */}
          </div>
        );
      })}
    </div>
  );
}
