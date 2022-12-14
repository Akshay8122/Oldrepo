import React,{useRef} from 'react'
import Child from './child';



export default function App() {

  const input = useRef();

  const clickHandler = () => {
    input.current.value = "Akshay Patel"
    input.current.focus()
    input.current.style.color = "red"
  }

  return (
    <div>
    <h1>Forwordref demo</h1>
    <Child ref={input}  title = ''/>

    <button onClick={clickHandler}>update me</button>
    </div>    
  );
}

