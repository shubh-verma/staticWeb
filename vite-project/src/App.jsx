import { useEffect, useState } from "react";
import "./index.css";
import Table from "./Table";

import useDebounce from "./hooks/useDebounce";

import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const debouncedValue = useDebounce(input, 500);

  useEffect(() => {
    console.log(debouncedValue);
    const baseURL = `https://api.github.com/search/users`;
    let queryURL = `${baseURL}?q=fullname:${input}&sort=followers`;
    console.log(queryURL);
    if (debouncedValue) {
      axios
        .get(queryURL)
        .then((r) => {
          console.log(r.data);
          if (r.data && r.data.items) {
            setData(data.items);
          }
        })
        .catch((e) => console.error(e));
    }
  }, [debouncedValue]);

  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            // saveSearch(e.target.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <Table data={data} />
    </>
  );
}

export default App;
