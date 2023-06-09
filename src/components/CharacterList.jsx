import React, { useState, useEffect } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setloading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage}/>

      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      
    <NavPage page={page} setPage={setPage}/>
    </div>
  );
};

export default CharacterList;
