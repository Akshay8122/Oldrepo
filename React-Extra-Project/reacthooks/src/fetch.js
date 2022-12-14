import { useEffect, useState } from "react";

function Fechdata() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3000/data.json").then((text) =>
        text.json()
      );
      setMsg(data.hello);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Hello World :{msg}</h1>
    </div>
  );
}
export default Fechdata;
