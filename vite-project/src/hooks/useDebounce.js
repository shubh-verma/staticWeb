import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
      console.log(debouncedValue);
    }, delay);

    return () => clearTimeout(timeout);
  }, [debouncedValue]);

  return debouncedValue;
};

export default useDebounce;
