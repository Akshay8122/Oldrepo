import { useRef, useEffect } from "react";

export default function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;



    
  }, [value]);
  console.log("log", value);
  return ref.current;
}
