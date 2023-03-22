import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Characters from "./Components/Characters";
import CharacterDescription from "./Components/CharacterDescription";

import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character", {
        params: {
          name: "",
          page: 1,
        },
      })
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (searchResults) => {
    setCharacters(searchResults.sort((a, b) =>
      a.name.localeCompare(b.name)
    ));
  };

  return (
    <Routes>
      <Route path='/' element={<Characters characters={characters} />} />
      <Route
        path='/character/:id'
        element={<CharacterDescription characters={characters} />}
      />
    </Routes>
  );
};

export default App;
