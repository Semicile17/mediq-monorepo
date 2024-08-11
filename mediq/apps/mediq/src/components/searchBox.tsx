import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto ">
      <form onSubmit={handleSearch} className="flex items-center ">
        <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="w- px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none  "
        />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-[#14967F] rounded-r-md hover:bg-[#095D7E] border-[#14967F] border"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m2.55-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
