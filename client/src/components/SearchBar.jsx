import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="flex bg-white text-black items-center gap-2 rounded-md px-4 py-2 w-1/3">
      <FaSearch className="text-gray-600" />
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Book"
        className="focus:outline-none w-full"
      />
    </div>
  );
};

export default SearchBar;
