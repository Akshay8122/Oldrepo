import { useState, useEffect } from "react";
const getSavedValue = (key, initialValue) => {
  const countValue = JSON.parse(sessionStorage.getItem(key));
    if (countValue) return countValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
};

const useSessionStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
} ;
export default useSessionStorage;
