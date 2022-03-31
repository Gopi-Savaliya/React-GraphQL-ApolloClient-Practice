import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";

export const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  if (error) {
    return <div>Something went wrong.......</div>;
  }

  if (loading) {
    return <div>Loading...........</div>;
  }

  return (
    <div className="CharactersList">
      {data.characters.results.map((character) => {
        return (
          <Link key={character.id} to={`/${character.id}`} >
            <img src={character.image} alt="loading..." />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};
