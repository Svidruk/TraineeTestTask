import React, { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import SearchBar from "../SearchBar/SearchBar";
import LoadingAnimationComponent from "../LoadingAnimationComponent/LoadingAnimationComponent";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Characters.css";

const Characters = () => {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const savedQuery = localStorage.getItem("searchQuery");
    if (savedQuery) {
      setQuery(savedQuery);
    }
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(
          data.results.sort((a, b) => a.name.localeCompare(b.name))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div className='container'>
      <Logo className='logo' />
      <SearchBar onSearch={setQuery} />
      {isLoading ? (
        <LoadingAnimationComponent />
      ) : characters && characters.length > 0 ? (
        <div className='character-list'>
          {characters.slice(0, 8).map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <div>No characters found.</div>
      )}
    </div>
  );
};

export default Characters;
