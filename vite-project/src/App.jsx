import { useState } from "react";
import "./index.css";
import Table from "./Table.jsx";

import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);

  const saveSearch = async (value) => {
    let data = await apiCall(value);
    if (data && data.items) {
      data = data?.items;
      setData(data);
    } else if (data && data.message) {
      setErrorLog(true);
    } else {
      setData(data);
    }
  };

  async function apiCall(input) {
    const baseURL = `https://api.github.com/search/users`;
    let queryURL = `${baseURL}?q=fullname:${input}&sort=followers`;

    try {
      const response = await axios.get(queryURL);
      // console.log("response", response);
      setData(response.data.items);
      setErrorLog(false);
    } catch (error) {
      setData(error.response.data);
      setErrorLog(true);
    }
  }

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
            saveSearch(e.target.value);
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
