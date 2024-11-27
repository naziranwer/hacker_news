import React from "react";

const SearchBar = ({ query, setQuery }) => {
  const handleSearch = (e) => {
    if (e.key === "Enter") setQuery(e.target.value);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
        className="w-3/4 px-4 py-2 border rounded shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
