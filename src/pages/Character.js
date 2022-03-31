import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";

export const Character = () => {
    const { id } = useParams();

  const { error, loading, data } = useCharacter(id);

  if (error) {
    return <div>Something went wrong.......</div>;
  }

  if (loading) {
    return <div>Loading...........</div>;
  }

  return (
    <div className="Character">
      <img
        src={data.character.image}
        alt="loading..."
        height="500px"
        width="500px"
      />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
