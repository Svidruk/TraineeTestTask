import React, { useState } from "react";

function SearchBar(onSearch) {
  const [query, setQuery] = useState("");

  function handleSearchChange(event) {
    setQuery(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    query = onSearch;

    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((response) => response.json())
      .then((data) => {
        onSearch(data.results);
      });
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type='text'
        placeholder='Search for a character...'
        value={query}
        onChange={handleSearchChange}
      />
      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchBar;
