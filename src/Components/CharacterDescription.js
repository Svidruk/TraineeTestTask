import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDescription() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {character ? (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <div>Status: {character.status}</div>
          <div>Species: {character.species}</div>
          <div>Gender: {character.gender}</div>
          <div>Location: {character.location.name}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CharacterDescription;
