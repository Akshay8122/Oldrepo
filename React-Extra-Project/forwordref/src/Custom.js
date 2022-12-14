import useCustom from "./hooks/useCustomhook";

export default function Custom() {
  const [name, setName] = useCustom("name", "");

  return (
    <div>
      <hr />
      <h2>useDebugV alue hooks</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Entered value is : {name} </p>
    </div>
  );
}
