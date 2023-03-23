import { Routes, Route } from "react-router-dom";
import Characters from "./Components/Characters/Characters";
import CharacterDescription from "./Components/CharacterDescription/CharacterDescription";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Characters />} />
      <Route path='/character/:id' element={<CharacterDescription />} />
    </Routes>
  );
};

export default App;
