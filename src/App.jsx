import React, { useEffect, useState } from "react";
import Character from "./components/Character";
import CharacterList from "./components/CharacterList";

const App = () => {
  
  return (
    <div className="bg-dark text-white">
      <h1>Rick & Morty</h1>
      <CharacterList/>
    </div>
  )
};

export default App;
