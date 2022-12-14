import { useState, useEffect } from "react";

const getSavedValue = (key, initialValue) => {

  const demoValue = JSON.parse(sessionStorage.getItem(key));
  if (demoValue) return demoValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

const useCustom = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
export default useCustom;
