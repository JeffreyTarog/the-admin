import React, { useState } from "react";

import { Search } from "lucide-react";

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center space-x-2 rounded-lg">
      <input
        type="text"
        className="flex-grow px-4 py-2 text-xs text-gray-700 rounded-lg focus:outline-none"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
        className="flex px-4 py-2 bg-blue-500 rounded-lg hover:scale-105"
      >
        <Search size={15} />
      </button>
    </div>
  );
};

export default SearchBar;
