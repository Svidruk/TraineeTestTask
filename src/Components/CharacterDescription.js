import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDescription = ({ characters }) => {
  const { id } = useParams();
  const character = characters.find((c) => c.id === parseInt(id));

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className='character'>
      <img src={character.image} alt={character.name} />
      <div>
        <h1>{character.name}</h1>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Type: {character.type ? character.type : "-"}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterDescription;
