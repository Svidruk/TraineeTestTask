import { Routes, Route } from "react-router-dom";
import Characters from "./Components/Characters";
import CharacterDescription from "./Components/CharacterDescription";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Characters />} />
      <Route path='/character/:id' element={<CharacterDescription />} />
    </Routes>
  );
};

export default App;
