import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchBar from "./SearchBar";

const Characters = ({ characters, searchInput }) => {
  const sortedCharacters = characters.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className='container'>
      <SearchBar onSearch={searchInput}/>
      <div className='character-list'>
        {sortedCharacters.slice(0, 8).map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
