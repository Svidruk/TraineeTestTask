import { useState } from "react";
import { ReactComponent as Search } from "../../assets/Search.svg";
import "./SearchBar.css"

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
    localStorage.setItem("searchQuery", event.target.value);
    setSearchTerm(event.target.value);
  };

  const storedSearchTerm = localStorage.getItem("searchQuery");
  const [searchTerm, setSearchTerm] = useState(storedSearchTerm || "");

  return (
    <div className="search-bar">
      <Search className="glass"/>
      <input
        className='search-bar-input'
        type='text'
        placeholder='Filter by name...'
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
