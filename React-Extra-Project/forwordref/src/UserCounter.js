import useSessionStorage from "./hooks/useSessionStorage";
const UserCounter = () => {
  const [count, setCount] = useSessionStorage("count", "");

  return (
    <div>
      <hr />
      <h2>Custom Hooks demo</h2>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      <p>rendered count is {count} </p>
    </div>
  );
};
export default UserCounter;
