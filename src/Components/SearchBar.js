
const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
    localStorage.setItem('searchQuery', event.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Search for a character...'
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
