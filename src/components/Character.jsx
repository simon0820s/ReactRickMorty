import React from "react";

const Character = ({character}) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={"img: " + character.name} />
    </div>
  );
};

export default Character;
